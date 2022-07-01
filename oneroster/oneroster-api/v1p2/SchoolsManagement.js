export class SchoolsMangement{
    constructor(oneRosterApi){
        this.oneRosterApi = oneRosterApi
    }
    getAllSchools(cb) {
        let resource = `/schools/`
        return this.oneRosterApi.makeRosterRequest(resource, cb)
    }
    getAllSchoolsRaw(cb) {
        let resource = `/schools/`
        return this.oneRosterApi.makeRosterRequest(resource, cb)
    }
    getAllSchoolsAsync(cb) {
        let resource = `/schools/`
        return this.oneRosterApi.makeRosterRequest(resource, cb)
    }
    // getSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getClassesForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getClassesForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getClassesForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getEnrollmentsForClassInSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getEnrollmentsForClassInSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getEnrollmentsForClassInSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getStudentsForClassInSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getStudentsForClassInSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getStudentsForClassInSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getTeachersForClassInSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getTeachersForClassInSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getTeachersForClassInSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getCoursesForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getCoursesForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getCoursesForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getEnrollmentsForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getEnrollmentsForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getEnrollmentsForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getStudentsForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getStudentsForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getStudentsForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getTeachersForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getTeachersForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getTeachersForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getTermsForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getTermsForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // getTermsForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
}