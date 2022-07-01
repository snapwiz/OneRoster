import path from 'path'
import RelationConfig from '../RelationConfig.js'
export default class RelationConfigFactory{
    #fileHandler

    constructor(fileHandler) {
        this.#fileHandler = fileHandler
    }

    create() {
        const __dirname = path.resolve()
        const pathToSchemaJson = __dirname +  '/dist/oneroster-import-js/config/v1.1/relations.json';
        const content = this.#fileHandler.getContents(pathToSchemaJson)
        const dataConfig = JSON.parse(content)

        return new RelationConfig(dataConfig)
    }
}