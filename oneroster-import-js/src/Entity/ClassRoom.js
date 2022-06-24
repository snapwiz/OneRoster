import AbstractEntity from "./AbstractEntity.js"
import Organisation from "./Organisation.js";
import Enrollment from "./Enrollment.js";
import AcademicSession from "./AcademicSession.js";
export default class ClassRoom extends AbstractEntity
{
    getOrg()
    {
        return this.getParentRelationEntity(Organisation);
    }

    getEnrollments()
    {
        return this.getChildrenRelationEntities(Enrollment);
    }

    getAcademicSession()
    {
        return this.getParentRelationEntity(AcademicSession)
    }

    static getType()
    {
        return 'classes';
    }
}