import AbstractEntity from "./AbstractEntity.js"

export default class AcademicSession extends AbstractEntity{
    static getType() {
        return 'academicSessions'
    }
}