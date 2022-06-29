import AbstractEntity from "./AbstractEntity.js"
import Organisation from "./Organisation.js";
import Enrollment from "./Enrollment.js";
import AcademicSession from "./AcademicSession.js";
export default class ClassRoom extends AbstractEntity
{
    async getOrg()
    {
        return this.getParentRelationEntity(Organisation);
    }

    async getEnrollments()
    {
        return this.getChildrenRelationEntities(Enrollment);
    }

    async getAcademicSession()
    {
        return this.getParentRelationEntity(AcademicSession)
    }

    static getType()
    {
        return 'classes';
    }
}