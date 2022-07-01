"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V1p2Api = void 0;

var _SchoolsManagement = require("./SchoolsManagement.js");

var _OneRoster = _interopRequireDefault(require("../OneRoster.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class V1p2Api {
  constructor(baseUrl, clientId, clientSecret) {
    this.baseUrl = baseUrl;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    const oneRosterObj = new _OneRoster.default(baseUrl, clientId, clientSecret);
    this.schoolsMangement = new _SchoolsManagement.SchoolsMangement(oneRosterObj);
  }

}

exports.V1p2Api = V1p2Api;