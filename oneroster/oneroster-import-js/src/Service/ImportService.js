import _ from "lodash";
import ImporterFactory from "../Import/ImporterFactory.js";
export default class ImportService {
    #options

    #fileHandler
    #pathToFolder

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

    async import(file, type, options = {}) {
        this.#options = { ...this.#options, ...options }
        this.validateOptions()
        let importer = (new ImporterFactory(this.#options['version'], this.#fileHandler)).build(type)
        let fileResource = await this.#fileHandler.open(file)

        let dataLines = []
        let header = []
        const {delimiter, enclosure, escape} = this.#options['csvControl']
        let index = 0
        let lines = await this.#fileHandler.readCsvLines(fileResource, index, delimiter, enclosure, escape)
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
        let result = importer.import(header, dataLines)
        return result
    }

    async importMultiple(pathToFolder, options = {}) {
        this.#options = { ...this.#options, ...options }
        this.validateOptions()
        let results = {}

        let availableTypes = this.detectAvailableTypes(pathToFolder)
        availableTypes.forEach(async availableType => {
            results[availableType] = await this.import(`${pathToFolder}${availableType}.csv`, availableType, this.#options)
        })
        return results
    }

    getPathToFolder() {
        return this.#pathToFolder
    }

    setPathToFolder(pathToFolder) {
        this.#pathToFolder = pathToFolder
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