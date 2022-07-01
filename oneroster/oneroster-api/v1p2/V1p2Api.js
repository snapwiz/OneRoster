import {SchoolsMangement} from './SchoolsManagement.js'
import OneRoster from '../OneRoster.js'

export class V1p2Api{
    constructor(baseUrl, clientId, clientSecret){
        this.baseUrl = baseUrl
        this.clientId = clientId
        this.clientSecret = clientSecret
        const oneRosterObj = new OneRoster(baseUrl, clientId, clientSecret)
        this.schoolsMangement = new SchoolsMangement(oneRosterObj)
    }
}