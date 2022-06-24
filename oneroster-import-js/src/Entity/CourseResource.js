import AbstractEntity from "./AbstractEntity.js"
import Course from "./Course.js";
import Resource from "./Resource.js";
export default class CourseResource extends AbstractEntity
{
    getCourse()
    {
        return this.getParentRelationEntity(Course);
    }

    getResource()
    {
        return this.getParentRelationEntity(Resource);
    }

    static getType()
    {
       return 'courseResources';
    }
}