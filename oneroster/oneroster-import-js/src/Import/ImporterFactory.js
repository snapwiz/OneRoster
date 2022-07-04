import path from 'path'
import Validator from "../Schema/Validator.js"
import Importer from "./Importer.js"

export default class ImporterFactory {
    #version
    #fileHandler
    #types = {
        manifest: 'manifest.json',
        categories: 'categories.json',
        classResources: 'classResources.json',
        courseResources: 'courseResources.json',
        orgs: 'orgs.json',
        classes: 'classes.json',
        users: 'users.json',
        enrollments: 'enrollments.json',
        lineItems: 'lineItems.json',
        courses: 'courses.json',
        academicSessions: 'academicSessions.json',
        demographics: 'demographics.json',
        resources: 'resources.json',
        results: 'results.json',
    }

    constructor(version, fileHandler, types = {}){
        this.#version = version
        this.#fileHandler = fileHandler
        this.#types = {...this.#types, ...types}
    }

    build(type) {
        if (!this.#types[type]) {
            throw new Error(`${type} not supported by FactoryImporter`)
        }
        const pathToSchemaJson = __dirname + '/../../config/' + this.#version + '/' + this.#types[type]
        const schema = JSON.parse(this.#fileHandler.getContents(pathToSchemaJson))

        return new Importer(new Validator(schema))
    }
}