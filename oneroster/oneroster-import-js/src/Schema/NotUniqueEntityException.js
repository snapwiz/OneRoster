export default class NotUniqueEntityException extends Error{
    constructor(sourceId){
        const message = `'Entity with sourcedId ${sourceId} already exist.`
        super(message)
        this.name = 'NotUniqueEntityException'
    }
}