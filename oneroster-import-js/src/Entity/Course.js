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