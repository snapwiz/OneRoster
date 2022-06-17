import { V1p1Api } from "./v1p1/V1p1Api";
import { V1p2Api } from "./v1p2/V1p2Api";

export class OneRosterApi {
    constructor(){}
    V1p1(baseUrl, consumerKey, consumerSecret) {
        return new V1p1Api(baseUrl,consumerKey,consumerSecret);
    }
    V1p2(tokenUrl, baseUrl, clientId, clientSecret) {
        return new V1p2Api(tokenUrl, baseUrl, clientId, clientSecret);
    }
}