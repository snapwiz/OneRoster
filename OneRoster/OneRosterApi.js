import { V1p1Api } from "./v1p1/V1p1Api";
import { V1p2Api } from "./v1p2/V1p2Api";

export class OneRosterApi {
    constructor(){}
    v1p1(baseUrl, consumerKey, consumerSecret) {
        return new V1p1Api(baseUrl,consumerKey,consumerSecret);
    }
    v1p2(baseUrl, clientId, clientSecret) {
        return new V1p2Api(baseUrl, clientId, clientSecret);
    }
}