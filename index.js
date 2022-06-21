process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import OneRosterApi from "./OneRoster/OneRosterApi.js";

// TODO: access baseUrl, clientId, clientSecret from config file
const baseUrl = process.env.BASE_URL
const clientId = process.env.CONSUMER_KEY // consumerKey
const clientSecret = process.env.CONSUMER_SECRET // consumerSecret

const oneRosterApiObj = new OneRosterApi()

// using v1p1
// const v1p1Obj = oneRosterApiObj.v1p1(baseUrl, clientId, clientSecret)
// const callBackFunc = (error, statusCode, body) => {
//     if(error) {
//         // TODO: handle error
//     } else if (statusCode >= 400) {
//         // TODO:
//     } else {
//         // TODO: 
//     }
// }
// const result1 = v1p1Obj.schoolsMangement.getAllSchools(callBackFunc)

// using v1p2
const v1p2Obj = oneRosterApiObj.v1p2(baseUrl, clientId, clientSecret)
const result2 = await v1p2Obj.schoolsMangement.getAllSchools(callBackFunc)
console.log(result2.statusCode)




