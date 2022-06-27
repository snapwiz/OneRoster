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
const orgs = await entityRepository.getAll(Organisation)
console.log(orgs)

//get one class
const _classes = await entityRepository.getAll(ClassRoom)
console.log(_classes)

const _class = await entityRepository.get('class1', ClassRoom)
console.log(_class)
const academicSessions = await _class.getOrg()
console.log(academicSessions)

//get relations
const enrollments = await _class.getEnrollments()
console.log(enrollments)
