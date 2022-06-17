import {SchoolsMangement} from './SchoolsManagement'
import {OneRoster} from '../OneRoster'

export class V1p1Api{
    constructor(baseUrl, consumerKey, consumerSecret){
        this.baseUrl = baseUrl
        this.consumerKey = consumerKey
        this.consumerSecret = consumerSecret
        const oneRosterObj = new OneRoster(baseUrl, consumerKey, consumerSecret)
        this.schoolsMangement = new SchoolsMangement(oneRosterObj)
    }

}