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
        return this.#storage.findByTypeAndId(this.getType(), this.#id)
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
    getChildrenRelationEntities(className, inLineIds = false) {
        let keyType = className.getType()
        let entities = this.#storage.findByType(keyType)
        let index = this.#relationConfig.getConfig(`${this.getType()}.relation.${ketType}.index`)
        const results = entities.map(entity => {
            if (inLineIds) {
                return this.#id.includes(entity[index])
            } else {
                return this.#id === entity[index]
            }
        })

        return EntityFactory.createCollection(className, this.#storage, this.#relationConfig, results)
    }

    getParentRelationEntity(className, inLineIds = false) {
        let keyType = className.getType()
        let entities = this.#storage.findByType(keyType)
        let index = this.#relationConfig.getConfig(`${this.getType()}.relations.${keyType}.index`)
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