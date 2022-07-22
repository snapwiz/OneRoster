import _ from "lodash";
import ImporterFactory from "../Import/ImporterFactory.js";
export default class ImportService {
    #options

    #fileHandler
    #pathToFolder
    #fileStream
    #validationErrorLog = [['fileName', 'rowNo', 'sourcedId', 'errorDescription']]

    constructor(fileHandler) {
        this.#options = {
            version : 'v1.1',
            csvControl : {
                delimiter : ',',
                enclosure : '"',
                escape : '\\',
            }
        }
        this.#fileHandler = fileHandler
    }

    async import(filePathOrStream, type, options = {}) {
        this.#options = { ...this.#options, ...options }
        this.validateOptions()
        let importer = (new ImporterFactory(this.#options['version'], this.#fileHandler)).build(type)
        let fileResource
        if (this.#pathToFolder) {
            fileResource = await this.#fileHandler.open(filePathOrStream)
            if (!fileResource) {
                return {}
            } 
        } else {
            fileResource = filePathOrStream
        }

        let dataLines = []
        let header = []
        const {delimiter, enclosure, escape} = this.#options['csvControl']
        let index = 0
        let lines = []
        try {
        lines = await this.#fileHandler.readCsvLines(fileResource, index, delimiter, enclosure, escape)
        } catch(e) {
            this.#validationErrorLog = [...this.#validationErrorLog, [`${type}.csv`,'' ,'', e.message]]
        }
        if(!_.isEmpty(lines)) {
            for (const line of lines) {
                index++
                let dataLine = line.map(word => word.trim())
                if(index === 1) {
                    header = dataLine
                    continue
                }
                dataLines.push(dataLine)
            }
        }
        let {result, validationErrors} = importer.import(header, dataLines, type)
        this.#validationErrorLog = [...this.#validationErrorLog, ...validationErrors]
        return result
    }

    async importMultiple(pathToFolder, options = {}) {
        this.#options = { ...this.#options, ...options }
        this.validateOptions()
        let results = {}

        if(this.#pathToFolder) {
            let availableTypes = this.detectAvailableTypes(pathToFolder)
            availableTypes.forEach(async availableType => {
                results[availableType] = await this.import(`${pathToFolder}${availableType}.csv`, availableType, this.#options)
            })
        }
        return results
    }

    getPathToFolder() {
        return this.#pathToFolder
    }

    setPathToFolder(pathToFolder) {
        this.#pathToFolder = pathToFolder
    }

    getFileStream() {
        return this.#fileStream
    }

    setFileStream(stream) {
        this.#fileStream = stream
    }

    getValidationErrorLog() {
        return this.#validationErrorLog
    }

    async detectAvailableTypes(pathToFolder) {
        let types = {}
        index = 0;
        let result = await this.import(`${pathToFolder}manifest.csv`, 'manifest', this.options)
        result.forEach(row => {
            let property = row['propertyName']
            let value = row['value']

            if(property.indexOf('file.') !== -1 && value !== 'absent') {
                let parts = property.split('.')
                types[index++] = parts[parts.length - 1]
            }
        })

        return types
    }

    validateOptions()
    {
        if (_.isEmpty(this.#options['version'])) {
            throw new Error('Version should be specified as option');
        }

        if (_.isEmpty(this.#options['csvControl'])) {
            throw new Error('csvControl should be specified as option');
        }
    }
}