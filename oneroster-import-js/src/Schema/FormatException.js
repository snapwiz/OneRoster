class FormatException extends Error {
    constructor(field, shouldBe, itIs){
        const message = `Format of field ${field} it is invalid, it should be ${shouldBe} but it is ${itIs}.`
        this.name = 'FormatException'
        super(message)
    }
}
