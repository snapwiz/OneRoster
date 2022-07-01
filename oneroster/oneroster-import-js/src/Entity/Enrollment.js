import AbstractEntity from "./AbstractEntity.js"
import Organisation from "./Organisation.js";
import ClassRoom from "./ClassRoom.js";
import User from "./User.js";

export default class Enrollment extends AbstractEntity
{
    getOrg()
    {
        return this.getParentRelationEntity(Organisation)
    }

    getClass()
    {
        return this.getParentRelationEntity(ClassRoom)
    }

    getUser()
    {
        return this.getParentRelationEntity(User)
    }

    static getType()
    {
        return 'enrollments';
    }
}