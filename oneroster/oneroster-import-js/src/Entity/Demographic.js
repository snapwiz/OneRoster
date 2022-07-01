import AbstractEntity from "./AbstractEntity.js"
import User from "./User.js";
export default class Demographic extends AbstractEntity
{
    getUser()
    {
        return this.getParentRelationEntity(User)
    }

    static getType()
    {
        return 'demographics';
    }
}