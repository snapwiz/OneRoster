import _ from "lodash"
import AcademicSession from '../AcademicSession'
import ClassRoom from '../ClassRoom'
import Course from '../Course'
import Demographic from '../Demographic'
import Enrollment from '../Enrollment'
import Organisation from '../Organisation'
import User from '../User'
import Category from '../Category'
import ClassResource from '../ClassResource'
import CourseResource from '../CourseResource'
import LineItem from '../LineItem'
import Result from '../Result'
import Resource from '../Resource'
export default class EntityFactory {
    constructor() {}

    static async createCollections(storage, relationConfig){
        const typeToClassMap = {
            academicSessions: AcademicSession,
            classes: ClassRoom,
            courses: Course,
            demographics: Demographic,
            enrollments: Enrollment,
            orgs: Organisation,
            users: User,
            categories: Category,
            classResources: ClassResource,
            courseResources: CourseResource,
            lineItems: LineItem,
            results: Result,
            resources: Resource,
          }
          let entityCollections = []
          entityCollections = await storage.findAllEntity()
          
          const result = {}
          for(const entityType in entityCollections) {
              const allResults = entityCollections[entityType]
              const entityName = typeToClassMap[entityType]
              let index = 0
              let allObjs = {}
            for(const key in allResults) {
                let id = allResults[key]['sourcedId']
                let objNew = new entityName()
                objNew.setId(id)
                objNew.setStorage(storage)
                objNew.setRelationConfig(relationConfig)

                allObjs[index++] = objNew
            }
            result[entityType] = allObjs
        }
        const jsonData = {}
        for (const key in result) {
            jsonData[key] = await this.prototype.convertData(result[key])
        }

        return jsonData
    }

    static async createCollection(entityName, storage, relationConfig, inResults = null){
        if(typeof entityName === 'function' && !this.prototype.classExists(entityName))  {
            throw new Error(`${entityName} not a valid class`)
        }

        let obj = new entityName()

        let allObjs = {}
        let allResults = []
        if(_.isEmpty(inResults)) {
            allResults = await storage.findByType(obj.constructor.getType())
        } else {
            allResults = inResults
        }

        let index = 0
        for(const key in allResults) {
            let id = allResults[key]['sourcedId']
            let objNew = new entityName()
            objNew.setId(id)
            objNew.setStorage(storage)
            objNew.setRelationConfig(relationConfig)

            allObjs[index++] = objNew
        }

        return allObjs
    }

    static create(id, entityName, storage, relationConfig) {
        if(!this.prototype.classExists(entityName))  {
            throw new Error(`${entityName} not a valid class`)
        }

        let obj = new entityName()

        obj.setId(id)
        obj.setStorage(storage)
        obj.setRelationConfig(relationConfig)

        return obj
    }

    classExists(entityName) {
        const ExistingEntityClasses = [
            'AbstractEntity', 'AcademicSession', 'Category', 'ClassResource', 'ClassRoom', 'Course', 'CourseResource', 'Demographic', 'Enrollment', 'LineItem', 'Organisation', 'Resource', 'Result', 'User'
        ]
        if(ExistingEntityClasses.indexOf(entityName.name) !== -1) {
            return true
        }
        return false
    }

    async convertData(entityObjects) {
        let result = []
        for(const key in entityObjects) {
            const entityObject = entityObjects[key]
            const data = await entityObject.getData()
            result.push(data)
        }
        return result
    }

}