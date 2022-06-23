
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