import path from 'path'
import fs from "fs"
import { FileHandler, ImportService, CsvStorage, RelationConfigFactory, EntityRepository, Organisation, User, ClassRoom, AcademicSession } from "../src/index.js"

(async () => {


    const fileHandler = new FileHandler()
    const importService = new ImportService(fileHandler)
    // const __dirname = path.resolve()
    // const userFilePath = __dirname +  '/dist/oneroster-import-js/data/samples/OneRosterv1p1BaseCSV/users.csv'
    // const orgFilePath = __dirname +  '/dist/oneroster-import-js/data/samples/OneRosterv1p1BaseCSV/orgs.csv'
    // let fileStream = fs.createReadStream(userFilePath, {
    //     encoding: 'UTF-8',
    // })
    importService.setPathToFolder(__dirname +  '/../data/samples/OneRosterv1p1BaseCSV/')
    // importService.setFileStream(fileStream)

    const storage = new CsvStorage(importService)

    const relationConfig = (new RelationConfigFactory(fileHandler)).create()

    const entityRepository = new EntityRepository(storage, relationConfig)

    // const orgs = await entityRepository.getAll(Organisation)
    // const users = await entityRepository.getAll(User)
    // const orgs = await entityRepository.getAll(Organisation)

    // const user = await entityRepository.get('user1', User)
    // const org = await user.getOrgs()
    // console.log(users)
    // fileStream = fs.createReadStream(orgFilePath, {
    //     encoding: 'UTF-8',
    // })
    // importService.setFileStream(fileStream)
    // const orgs = await entityRepository.getAll(Organisation)
    // console.log(orgs)

    // const convertData = async (entityObjects) => {
    //     let result = []
    //     for(const key in entityObjects) {
    //         const entityObject = entityObjects[key]
    //         const data = await entityObject.getData()
    //         result.push(data)
    //     }
    //     return result
    // }
    // const allEntities = await entityRepository.getAllEntities()
    // console.log(allEntities.classes)
    // const arr = allEntities.classes.map(o => o.grades)
    // console.log(arr)
    // const orgs = await entityRepository.getAll(Organisation)
    // const orgUsers = await orgs[0].getUsers()
    // const orgUserData = (await convertData(orgUsers)).map(doc => doc.orgSourcedIds)
    // const classes = await entityRepository.getAll(ClassRoom)
    // const classesData = await convertData(classes)
    // console.log({orgUserData, classesData})
    // const userOrg = await users[0].getOrgs()
    // const data = await convertData(userOrg)
    // console.log({data})
    // const data = await convertData(users)
    // console.log(data)
    // const userDemographicObj = await users[0].getDemographics()
    // const userDemographicData = await convertData(userDemographicObj)
    // console.log({userDemographicData})
    
    // const orgData = await convertData(orgs)
    // console.log(orgData)
    // const terms = await entityRepository.getAll(AcademicSession)
    // console.log(terms)
    // const termData = await convertData(terms)
    // console.log(termData)
    // console.log(importService.getValidationErrorLog())
    // const classes = await entityRepository.getAll(ClassRoom)
    // const classesData = await convertData(classes)
    // console.log(classesData)
    // const classOrg = await classes[0].getOrg()
    // console.log(classOrg)
    // const classOrgData = await classOrg.getData()
    // console.log(classOrgData)

})()


