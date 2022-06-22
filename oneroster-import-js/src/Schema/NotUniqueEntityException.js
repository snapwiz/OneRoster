export default class NotUniqueEntityException extends Error{
    constructor(sourceId){
        const message = `'Entity with sourcedId ${sourceId} already exist.`
        this.name = 'NotUniqueEntityException'
        super(message)
    }
}