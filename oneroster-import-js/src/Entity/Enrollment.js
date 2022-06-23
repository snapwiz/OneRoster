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