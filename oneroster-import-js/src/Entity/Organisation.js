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