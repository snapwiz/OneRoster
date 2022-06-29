import AbstractEntity from "./AbstractEntity.js"
export default class Category extends AbstractEntity
{
    static getType()
    {
       return 'categories';
    }
}