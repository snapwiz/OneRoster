import AbstractEntity from "./AbstractEntity.js"
import ClassRoom from './ClassRoom.js'
import Resource from './Resource.js'

export default class ClassResource extends AbstractEntity
{
    constructor() {}
    getClass()
    {
        return this.getParentRelationEntity(ClassRoom)
    }

    getResource()
    {
        return this.getParentRelationEntity(Resource)
    }

    static getType()
    {
        return 'classResources';
    }
}