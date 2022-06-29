export default class FormatException extends Error {
    constructor(field, shouldBe, itIs){
        const message = `Format of field ${field} is invalid, it should be ${shouldBe} but it is ${itIs}.`
        super(message)
        this.name = 'FormatException'
    }
}
