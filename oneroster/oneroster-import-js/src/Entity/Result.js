import AbstractEntity from "./AbstractEntity.js"
import LineItem from "./LineItem.js";
import User from "./User.js";
export default class Result extends AbstractEntity
{
    getLineItem()
    {
        return this.getParentRelationEntity(LineItem)
    }

    getUser()
    {
        return this.getParentRelationEntity(User)
    }

    static getType()
    {
        return 'results';
    }
}