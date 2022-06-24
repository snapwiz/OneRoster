import AbstractEntity from "./AbstractEntity.js"
import ClassRoom from "./ClassRoom.js";
import User from "./User.js";
import Enrollment from "./Enrollment.js";
export default class Organisation extends AbstractEntity
{
    getClasses()
    {
        return this.getChildrenRelationEntities(ClassRoom)
    }

    getUsers()
    {
        return this.getChildrenRelationEntities(User, true);
    }

    getEnrollments()
    {
        return this.getChildrenRelationEntities(Enrollment)
    }

    static getType()
    {
        return 'orgs';
    }
}