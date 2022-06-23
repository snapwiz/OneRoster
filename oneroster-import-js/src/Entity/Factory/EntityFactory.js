import { isEmpty } from "lodash"

export default class EntityFactory {
    constructor() {}

    static createCollection(entityName, storage, relationConfig, inResults = null){
        if(!this.classExists(entityName))  {
            throw new Error(`${entityName} not a valid class`)
        }

        let obj = new entityName()
        if (!(obj instanceof EntityInterface)) {
            throw new Error(`${entityName}: invalid Entity Provided`)
        }

        let allObjs = {}
        let allResults = []
        if(isEmpty(inResults)) {
            allResults = storage.findByType(obj.getType())
        } else {
            allResults = inResults
        }

        let index = 0
        allResults.forEach(result => {
            let id = result['sourceId']
            let objNew = new entityName()
            objNew.setId(id)
            objNew.setStorage(storage)
            objNew.setRelationConfig(relationConfig)

            allObjs[index++] = objNew
        })

        return allObjs
    }

    static create(id, entityName, storage, relationConfig) {
        if(!this.classExists(entityName))  {
            throw new Error(`${entityName} not a valid class`)
        }

        let obj = new entityName()
        if (!(obj instanceof EntityInterface)) {
            throw new Error(`${entityName}: invalid Entity Provided`)
        }

        objNew.setId(id)
        objNew.setStorage(storage)
        objNew.setRelationConfig(relationConfig)

        return obj
    }

    classExists(className) {
        const ExistingClasses = []
        if(ExistingClasses.indexOf(className) !== -1) {
            return true
        }
        return false
    }

}