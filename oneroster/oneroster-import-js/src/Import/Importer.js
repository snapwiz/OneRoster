import _ from "lodash"
import NotUniqueEntityException from "../Schema/NotUniqueEntityException.js"

export default class Importer {
    #schemaValidator
    constructor(schemaValidator) {
        this.#schemaValidator = schemaValidator
    }

    import(header = [], data = [], type) {
        let result = {}
        let validationErrors = []
        let count = 0
        let index = 0
        data.forEach(row => {
            index++
            let rowWithHeader = {}
            for(let i = 0; i < Math.min(header.length, row.length); i++) {
                rowWithHeader[header[i]] = row[i]
            }
            try {
            rowWithHeader = this.#schemaValidator.validate(rowWithHeader)
            if (!_.isEmpty(rowWithHeader?.['sourcedId'])) {
                if (rowWithHeader['sourcedId'] in result === true) {
                    throw new NotUniqueEntityException(rowWithHeader['sourcedId'])
                }
                result[rowWithHeader['sourcedId']] = rowWithHeader
            } else {
                // TODO
                result[count++] = rowWithHeader
            }
        } catch (e) {
            // validationError = [fileName, rowNo, sourcedId, errorMessage]
            let validationError = [`${type}.csv`, index, rowWithHeader['sourcedId'], e.message || '']
            validationErrors.push(validationError)
        }
        })
        return {
            result,
            validationErrors
        }
    }
}