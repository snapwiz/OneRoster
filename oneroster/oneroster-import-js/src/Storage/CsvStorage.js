import _ from "lodash"

export default class CsvStorage {
    #importService
    #imports = {}

    constructor(importService) {
        this.#importService = importService
    }

    async findByType(typeOfEntity) {
        if(!_.isEmpty(this.#imports[typeOfEntity])) {
            return this.#imports[typeOfEntity]
        }
        let pathToFolder = this.#importService.getPathToFolder()
        if(_.isEmpty(pathToFolder)) {
            this.#imports[typeOfEntity] = await this.#importService.import(this.#importService.getFileStream(), typeOfEntity)
        } else {
            this.#imports[typeOfEntity] = await this.#importService.import(`${pathToFolder}${typeOfEntity}.csv`, typeOfEntity)
        }
        return this.#imports[typeOfEntity]
    }

    async findByTypeAndId(typeOfEntity, id) {
        if(!_.isEmpty(this.#imports[typeOfEntity])) {
            return this.#imports[typeOfEntity][id]
        }

        if(_.isEmpty(this.#imports[typeOfEntity])) {
            let pathToFolder = this.#importService.getPathToFolder()
            if(_.isEmpty(pathToFolder)) {
                this.#imports[typeOfEntity] = await this.#importService.import(this.#importService.getFileStream(), typeOfEntity)
            } else {
                this.#imports[typeOfEntity] = await this.#importService.import(`${pathToFolder}${typeOfEntity}.csv`, typeOfEntity)
            }
        }

        this.#imports[typeOfEntity].forEach(item => {
            if(item['sourcedId'] === id) {
                return item
            }
        })
    }
}