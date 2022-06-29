import AbstractEntity from "./AbstractEntity.js"
import ClassRoom from "./ClassRoom.js";
import Category from "./Category.js";
import AcademicSession from "./AcademicSession.js";
export default class LineItem extends AbstractEntity
{
    getClass()
    {
        return this.getParentRelationEntity(ClassRoom)
    }

    getCategory()
    {
        return this.getParentRelationEntity(Category)
    }

    getAcademicSession()
    {
        return this.getParentRelationEntity(AcademicSession)
    }

    static getType()
    {
        return 'lineItems';
    }
}