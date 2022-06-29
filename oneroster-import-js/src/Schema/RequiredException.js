export default class RequiredException extends Error{
    constructor(field){
        const message = `Required field ${field} does not exists or it is empty`
        super(message)
        this.name = 'RequiredException'
    }
}