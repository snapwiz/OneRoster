import EntityFactory from "./Factory/EntityFactory.js";

export default class AbstractEntity {
    #id
    #storage
    #relationConfig

    constructor() {
        if(this.constructor == AbstractEntity){
        throw new Error("Object of Abstract Class cannot be created");
        }
    }

    static getType(){
        throw new Error("Abstract Method has no implementation");
    }

    getData() {
        return this.#storage.findByTypeAndId(this.constructor.getType(), this.#id)
    }

    setStorage(storage) {
        this.#storage = storage
    }
    setRelationConfig(relationConfig) {
        this.#relationConfig = relationConfig
    }
    getId() {
        return this.#id
    }
    setId(id) {
        this.#id = id
    }
    async getChildrenRelationEntities(className, inLineIds = false) {
        let keyType = className.getType()
        let entities = await this.#storage.findByType(keyType)
        let index = this.#relationConfig.getConfig(`${this.constructor.getType()}.relations.${keyType}.index`)
        let results = {}
        for (const key in entities) {
            const entity = entities[key]
            if (inLineIds && this.#id.includes(entity[index])) {
                results[key] = entity
            } else if(this.#id === entity[index]) {
                results[key] = entity
            }
        }
        // const results = Object.values(entities).map(entity => {
        //     if (inLineIds) {
        //         return this.#id.includes(entity[index])
        //     } else {
        //         return this.#id === entity[index]
        //     }
        // })

        return EntityFactory.createCollection(className, this.#storage, this.#relationConfig, results)
    }

    async getParentRelationEntity(className, inLineIds = false) {
        let keyType = className.getType()
        let entities = await this.#storage.findByType(keyType)
        let index = this.#relationConfig.getConfig(`${this.constructor.getType()}.relations.${keyType}.index`)
        let result
        let valueOfId
        if (inLineIds){
            valueOfId = this.getData()[index]
            result = entities.map(entity => {
                let _valueOfId = valueOfId.split(',')
                return _valueOfId.indexOf(entity['sourceId']) !== -1
            })

            return EntityFactory.createCollection(className, this.#storage, this.#relationConfig, results)
        }

        valueOfId = this.getData()[index]

        return EntityFactory.create(valueOfId, className, this.#storage, this.#relationConfig)
    }
}