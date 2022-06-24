import _ from "lodash"

export default class CsvStorage {
    #importService
    #imports = {}

    constructor(importService) {
        this.#importService = importService
    }

    findByType(typeOfEntity) {
        if(!_.isEmpty(this.#imports[typeOfEntity])) {
            return this.#imports[typeOfEntity]
        }
        this.#imports[typeOfEntity] = this.#importService.import(`${this.#importService.getPathToFolder()}${typeOfEntity}.csv`, typeOfEntity)
        return this.#imports[typeOfEntity]
    }

    findByTypeAndId(typeOfEntity, id) {
        if(!_.isEmpty(this.#imports[typeOfEntity])) {
            return this.#imports[typeOfEntity][id]
        }

        if(_.isEmpty(this.#imports[typeOfEntity])) {
            this.#imports[typeOfEntity] = this.#importService.import(`${this.#importService.getPathToFolder()}${typeOfEntity}.csv`, typeOfEntity)
        }

        this.#imports[typeOfEntity].forEach(item => {
            if(item['sourceId'] === id) {
                return item
            }
        })
    }
}