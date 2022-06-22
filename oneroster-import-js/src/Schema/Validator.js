import {isEmpty} from 'lodash'

import RequiredException from './RequiredException'

export default class Validator{
    #schema
    constructor(schema){
        this.#schema = schema
    }
    validate(dataRow) {
        this.validateRequiredFields(dataRow)
        return this.validateFormat(dataRow)
    }
    validateRequiredFields(dataRow) {
        const requiredFields = this.extractRequiresFields()
        requiredFields.forEach(requiredField => {
            if(isEmpty(dataRow[requiredField])) {
                throw new RequiredException(requiredField)
            }
        })
    }
    validateFormat(dataRow) {
        this.#schema?.forEach(itemSchema => {
            const columnIdentifier = itemSchema['columnId']
            if(isEmpty(dataRow[columnIdentifier])) {
                continue
            }
            const format = itemSchema['format']
            let value = dataRow[columnIdentifier]

            if(format === 'boolean') {
                value = !!value
            }

            if(format === 'date' || date === 'datetime') {
                let dateFormat = format === 'datetime'? this.#DATE_FORMAT : this.#DATE_TIME_FORMAT
                value = new Date()
                // TODO: moment or some different library
            } else {
                if(typeof value !== format && this.isFieldRequired(columnIdentifier)) {
                    throw new FormatException(columnIdentifier, format, typeof value)
                }
            }

            dataRow[columnIdentifier] = value
        })
    }

    extractRequiresFields() {
        const requiredFields = []
        this.#schema?.forEach(itemSchema => {
            if(itemSchema['required']) {
                requiredFields.push(itemSchema['columnId'])
            }
        })
        return requiredFields
    }

    isFieldRequired(field){
        const requiredFields = this.extractRequiresFields()
        return requiredFields.indexOf(field) !== -1
    }
}