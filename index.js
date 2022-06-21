process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import OneRosterApi from "./OneRoster/OneRosterApi.js";

// TODO: access baseUrl, clientId, clientSecret from config file
const baseUrl = 'https://edulastic-vn-v2.oneroster.com/ims/oneroster/v1p1'
const clientId = '05f7b9467647b6357892bd07' // consumerKey
const clientSecret = '2801e896353e9c2d81d91568' // consumerSecret

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




