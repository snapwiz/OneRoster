import _ from 'lodash'
import moment from 'moment'
import validator from 'validator'
import FormatException from './FormatException.js'
import RequiredException from './RequiredException.js'

export default class Validator{
    #DATE_FORMAT = 'YYYY-MM-DD'
    #DATE_TIME_FORMAT = 'YYYY-MM-DD HH:MM:SS'
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
            if(_.isEmpty(dataRow[requiredField])) {
                throw new RequiredException(requiredField)
            }
        })
    }
    validateFormat(dataRow) {
        let _dataRow = {}
        this.#schema?.forEach(itemSchema => {
            const columnIdentifier = itemSchema['columnId']
            if(_.isEmpty(dataRow[columnIdentifier])) {
                return
            }
            const format = itemSchema['format']
            let value = dataRow[columnIdentifier]

            if(format === 'boolean') {
                if (validator.isBoolean(value, {loose: true})) {
                    value = true
                } else {
                    value = false
                }
            }

            if(format === 'date' || format === 'datetime') {
                let dateFormat = format === 'date'? this.#DATE_FORMAT : this.#DATE_TIME_FORMAT
                value = moment(new Date(value)).format(dateFormat)
                if (value === 'Invalid date' && this.isFieldRequired(columnIdentifier)) {
                    throw new FormatException(columnIdentifier, format, typeof value)
                }
            } else if(format === 'list') {
                value = value.split(',').map((_val) => _val.trim())
            } else if(format === 'float') {
                if(isNaN(value) && this.isFieldRequired(columnIdentifier)) {
                    throw new FormatException(columnIdentifier, format, typeof value)
                }
            } else if(format === 'year') {
                const date = new Date(value)
                if(date === 'Invalid Date') {
                    throw new FormatException(columnIdentifier, format, typeof value)
                }
                value = date.getFullYear().toString()
            } else {
                if(typeof value !== format && this.isFieldRequired(columnIdentifier)) {
                    throw new FormatException(columnIdentifier, format, typeof value)
                }
            }
            _dataRow[columnIdentifier] = value
        })
        return _dataRow
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