import path from 'path'
import { FileHandler, ImportService, CsvStorage, RelationConfigFactory, EntityRepository, Organisation, User, ClassRoom } from "../src/index.js"

const fileHandler = new FileHandler()
const importService = new ImportService(fileHandler)
const __dirname = path.resolve()
importService.setPathToFolder(__dirname +  '/oneroster-import-js/data/samples/OneRosterv1p1BaseCSV/')

const storage = new CsvStorage(importService)

const relationConfig = (new RelationConfigFactory(fileHandler)).create()

const entityRepository = new EntityRepository(storage, relationConfig)

// const orgs = await entityRepository.getAll(Organisation)
const users = await entityRepository.getAll(User)
const orgs = await entityRepository.getAll(Organisation)

const user = await entityRepository.get('user1', User)
const org = await user.getOrgs()
console.log(org)


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

