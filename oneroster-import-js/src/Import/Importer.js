import { isEmpty, result } from "lodash"
import NotUniqueEntityException from "../Schema/NotUniqueEntityException"

export default class Importer {
    #schemaValidator
    constructor(schemaValidator) {
        this.#schemaValidator = schemaValidator
    }

    import(header = [], data = []) {
        result = {}
        let count = 0
        data.forEach(row => {
            let rowWithHeader = {}
            for(let i = 0; i < Math.min(header.length, row.length); i++) {
                rowWithHeader[header[i]] = row[i]
            }
            rowWithHeader = this.#schemaValidator.validate(rowWithHeader)
            if (!isEmpty(rowWithHeader['sourcedId'])) {
                if (rowWithHeader['sourcedId'] in result === true) {
                    throw new NotUniqueEntityException(rowWithHeader['sourcedId'])
                }
                result[rowWithHeader['sourcedId']] = rowWithHeader
            } else {
                // TODO
                result[count++] = rowWithHeader
            }
        })
        return result
    }
}