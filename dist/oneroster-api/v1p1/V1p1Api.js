"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V1p1Api = void 0;

var _SchoolsManagement = require("./SchoolsManagement.js");

var _OneRoster = _interopRequireDefault(require("../OneRoster.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class V1p1Api {
  constructor(baseUrl, consumerKey, consumerSecret) {
    this.baseUrl = baseUrl;
    this.consumerKey = consumerKey;
    this.consumerSecret = consumerSecret;
    const oneRosterObj = new _OneRoster.default(baseUrl, consumerKey, consumerSecret);
    this.schoolsMangement = new _SchoolsManagement.SchoolsMangement(oneRosterObj);
  }

}

exports.V1p1Api = V1p1Api;