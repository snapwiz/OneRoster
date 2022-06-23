import ClassRoom from './ClassRoom'
import Resource from './Resource'

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