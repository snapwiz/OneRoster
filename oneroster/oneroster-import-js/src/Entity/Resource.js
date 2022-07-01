import AbstractEntity from "./AbstractEntity.js"
export default class Resource extends AbstractEntity
{
    static getType()
    {
       return 'resources';
    }
}