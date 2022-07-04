import path from 'path'
import fs from "fs"
import { FileHandler, ImportService, CsvStorage, RelationConfigFactory, EntityRepository, Organisation, User, ClassRoom } from "../src/index.js"

(async () => {


    const fileHandler = new FileHandler()
    const importService = new ImportService(fileHandler)
    const __dirname = path.resolve()
    // const userFilePath = __dirname +  '/dist/oneroster-import-js/data/samples/OneRosterv1p1BaseCSV/users.csv'
    // const orgFilePath = __dirname +  '/dist/oneroster-import-js/data/samples/OneRosterv1p1BaseCSV/orgs.csv'
    // let fileStream = fs.createReadStream(userFilePath, {
    //     encoding: 'UTF-8',
    // })
    importService.setPathToFolder(__dirname +  '/dist/oneroster-import-js/data/samples/OneRosterv1p1BaseCSV/')
    // importService.setFileStream(fileStream)

    const storage = new CsvStorage(importService)

    const relationConfig = (new RelationConfigFactory(fileHandler)).create()

    const entityRepository = new EntityRepository(storage, relationConfig)

    // const orgs = await entityRepository.getAll(Organisation)
    const users = await entityRepository.getAll(User)
    // const orgs = await entityRepository.getAll(Organisation)

    // const user = await entityRepository.get('user1', User)
    // const org = await user.getOrgs()
    console.log(users)
    // fileStream = fs.createReadStream(orgFilePath, {
    //     encoding: 'UTF-8',
    // })
    // importService.setFileStream(fileStream)
    const orgs = await entityRepository.getAll(Organisation)
    console.log(orgs)


    const convertData = async (entityObjects) => {
        let result = []
        for(const key in entityObjects) {
            const entityObject = entityObjects[key]
            const data = await entityObject.getData()
            result.push(data)
        }
        return result
    }
    const data = await convertData(users)
    console.log(data)
    const orgData = await convertData(orgs)
    console.log(orgData)

})()


