

export default class RelationConfigFactory{
    #fileHandler

    constructor(fileHandler) {
        this.#fileHandler = fileHandler
    }

    create() {
        const pathToSchemaJson = __dirname +  '/../../../config/v1.1/relations.json';
        const dataConfig = JSON.parse(this.#fileHandler.getContents(pathToSchemaJson))

        return new RelationConfig(dataConfig)
    }
}