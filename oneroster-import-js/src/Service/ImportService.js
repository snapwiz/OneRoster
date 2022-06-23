import { isEmpty } from "lodash";
import FileHandler from "../File/FileHandler";
import ImporterFactory from "../Import/ImporterFactory";

export default class ImportService {
    #options = {
        version : 'v1.1',
        csvControl : {
            delimiter : ',',
            enclosure : '"',
            escape : '\\',
        }
    }

    #fileHandler
    #pathToFolder

    constructor(fileHandler) {
        this.#fileHandler = fileHandler
    }

    import(file, type, options = {}) {
        this.#options = { ...this.#options, ...options }
        this.validateOptions()
        let importer = (new ImporterFactory(this.#options['version'], this.#fileHandler)).build(type)
        let fileResource = this.#fileHandler.open(file)

        let lines = []
        let header = []
        const {delimiter, enclosure, escape} = this.#options['csvControl']
        let index = 0
        let line = this.#fileHandler.readCsvLine(fileResource, index, delimiter, enclosure, escape)
        while(!isEmpty(line)) {
            index++
            let dataLine = line.map(word => word.trim())
            if(index === 1) {
                header = dataLine
                continue
            }
            lines.push(dataLine)
        }
        let result = importer.import(header, lines)
        return result
    }

    importMultiple(pathtoFolder, options = {}) {
        this.#options = { ...this.#options, ...options }
        this.validateOptions()
        let results = {}

        let availableTypes = this.detectAvailableTypes(pathtoFolder)
        availableTypes.forEach(availableType => {
            results[availableType] = this.import(`${pathtoFolder}${availableType}.csv`, availableType, this.#options)
        })
        return results
    }

    getPathtoFolder() {
        return this.#pathtoFolder
    }

    setPathToFolder(pathToFolder) {
        this.#pathToFolder = pathToFolder
    }

    detectAvailableTypes(pathToFolder) {
        let types = {}
        index = 0;
        let result = this.import(`${pathToFolder}manifest.csv`, 'manifest', this.#options)
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
        if (isEmpty(this.#options['version'])) {
            throw new Error('Version should be specified as option');
        }

        if (isEmpty(this.#options['csvControl'])) {
            throw new Error('csvControl should be specified as option');
        }
    }
}