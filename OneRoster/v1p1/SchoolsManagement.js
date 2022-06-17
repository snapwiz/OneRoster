export class SchoolsMangement{
    constructor(oneRosterApi){
        this.oneRosterApi = oneRosterApi
    }
    GetAllSchools(cb) {
        let resource = `/schools/`
        return this.oneRosterApi.makeRosterRequest(resource, cb)
    }
    GetAllSchoolsRaw(cb) {
        let resource = `/schools/`
        return this.oneRosterApi.makeRosterRequest(resource, cb)
    }
    GetAllSchoolsAsync(cb) {
        let resource = `/schools/`
        return this.oneRosterApi.makeRosterRequest(resource, cb)
    }
    // GetSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetClassesForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetClassesForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetClassesForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetEnrollmentsForClassInSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetEnrollmentsForClassInSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetEnrollmentsForClassInSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetStudentsForClassInSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetStudentsForClassInSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetStudentsForClassInSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetTeachersForClassInSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetTeachersForClassInSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetTeachersForClassInSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetCoursesForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetCoursesForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetCoursesForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetEnrollmentsForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetEnrollmentsForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetEnrollmentsForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetStudentsForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetStudentsForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetStudentsForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetTeachersForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetTeachersForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetTeachersForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetTermsForSchool(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetTermsForSchoolRaw(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
    // GetTermsForSchoolAsync(cb) {
    //     let resource = `/schools/`
    //     return this.oneRosterApi.makeRosterRequest(resource, cb)
    // }
}