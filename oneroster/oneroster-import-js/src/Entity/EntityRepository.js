import EntityFactory from "./Factory/EntityFactory.js"

export default class EntityRepository
{
    #storage
    #relationConfig

    constructor(storage, relationConfig)
    {
        this.#storage = storage
        this.#relationConfig = relationConfig
    }

    async get(id, entityName)
    {
        return EntityFactory.create(id, entityName, this.#storage, this.#relationConfig)
    }

    async getAll(entityName)
    {
        return EntityFactory.createCollection(entityName, this.#storage, this.#relationConfig)
    }

    async getAllEntities()
    {
        return EntityFactory.createCollections(this.#storage, this.#relationConfig)
    }
}