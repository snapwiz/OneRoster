class LineItem extends AbstractEntity
{
    getClass()
    {
        return this.getParentRelationEntity(ClassRoom)
    }

    getCategory()
    {
        return this.getParentRelationEntity(Category)
    }

    getAcademicSession()
    {
        return this.getParentRelationEntity(AcademicSession)
    }

    static getType()
    {
        return 'lineItems';
    }
}