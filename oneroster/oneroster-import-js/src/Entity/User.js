import AbstractEntity from "./AbstractEntity.js"
import Organisation from "./Organisation.js"
import Demographic from "./Demographic.js"
import Enrollment from "./Enrollment.js"

export default class User extends AbstractEntity
{
    getOrgs()
    {
        return this.getParentRelationEntity(Organisation, true)
    }

    getDemographics()
    {
        return this.getChildrenRelationEntities(Demographic)
    }

    getEnrollments()
    {
        return this.getChildrenRelationEntities(Enrollment)
    }

    static getType()
    {
        return 'users'
    }
}