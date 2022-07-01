import AbstractEntity from "./AbstractEntity.js"
import Organisation from "./Organisation.js";
import AcademicSession from "./AcademicSession.js";

export default class Course extends AbstractEntity
{
    getOrg()
    {
        return this.getParentRelationEntity(Organisation)
    }

    getAcademicCourse()
    {
        return this.getParentRelationEntity(AcademicSession);
    }

    static getType()
    {
        return 'courses';
    }
}