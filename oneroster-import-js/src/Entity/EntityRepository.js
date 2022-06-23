import EntityFactory from "./Factory/EntityFactory"

export default class EntityRepository
{
    #storage
    #relationConfig

    constructor(storage, relationConfig)
    {
        this.#storage = storage
        this.#relationConfig = relationConfig
    }

    get(id, entityName)
    {
        return EntityFactory.create(id, entityName, this.#storage, this.#relationConfig)
    }

    getAll(entityName)
    {
        return EntityFactory.createCollection(entityName, this.#storage, this.#relationConfig)
    }
}