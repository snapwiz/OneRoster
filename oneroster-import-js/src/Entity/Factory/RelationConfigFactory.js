import path from 'path'
import RelationConfig from '../RelationConfig.js'
export default class RelationConfigFactory{
    #fileHandler

    constructor(fileHandler) {
        this.#fileHandler = fileHandler
    }

    create() {
        const __dirname = path.resolve()
        const pathToSchemaJson = __dirname +  '/oneroster-import-js/config/v1.1/relations.json';
        const dataConfig = JSON.parse(this.#fileHandler.getContents(pathToSchemaJson))

        return new RelationConfig(dataConfig)
    }
}