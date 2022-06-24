import path from 'path'
import { FileHandler, ImportService, CsvStorage, RelationConfigFactory, EntityRepository, Organisation, User, ClassRoom } from "../src/index.js"

const fileHandler = new FileHandler()
const importService = new ImportService(fileHandler)
const __dirname = path.resolve()
importService.setPathToFolder(__dirname +  '/oneroster-import-js/data/samples/OneRosterv1p1BaseCSV/')

const storage = new CsvStorage(importService)

const relationConfig = (new RelationConfigFactory(fileHandler)).create()

const entityRepository = new EntityRepository(storage, relationConfig)

// get all organisation
const orgs = entityRepository.getAll(Organisation)

// get one organisation
const org = entityRepository.get('user1', User)
console.log(org)

//get one class
const _class = entityRepository.get('class1', ClassRoom)
console.log(_class)

//get relations
console.log(_class.getEnrollments());