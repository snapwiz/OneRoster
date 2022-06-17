import { OneRosterApi } from "./OneRoster/OneRosterApi";

// TODO: access baseUrl, clientId, clientSecret from config file
const baseUrl = ''
const clientId = '' // consumerKey
const clientSecret = '' // consumerSecret

const oneRosterApiObj = OneRosterApi()

// using v1p1
const v1p1Obj = oneRosterApiObj.v1p1(baseUrl, clientId, clientSecret)
const callBackFunc = (error, statusCode, body) => {
    if(error) {
        // TODO: handle error
    } else if (statusCode >= 400) {
        // TODO:
    } else {
        // TODO: 
    }
}
const result1 = v1p1Obj.schoolsMangement.getAllSchools(callBackFunc)

// using v1p2
const v1p2Obj = oneRosterApiObj.v1p2(baseUrl, clientId, clientSecret)
const callBackFunc = (error, statusCode, body) => {
    if(error) {
        // TODO: handle error
    } else if (statusCode >= 400) {
        // TODO:
    } else {
        // TODO: 
    }
}
const result2 = v1p2Obj.schoolsMangement.getAllSchools(callBackFunc)





