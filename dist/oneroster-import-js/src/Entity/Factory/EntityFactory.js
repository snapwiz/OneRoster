"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _AcademicSession = _interopRequireDefault(require("../AcademicSession"));

var _ClassRoom = _interopRequireDefault(require("../ClassRoom"));

var _Course = _interopRequireDefault(require("../Course"));

var _Demographic = _interopRequireDefault(require("../Demographic"));

var _Enrollment = _interopRequireDefault(require("../Enrollment"));

var _Organisation = _interopRequireDefault(require("../Organisation"));

var _User = _interopRequireDefault(require("../User"));

var _Category = _interopRequireDefault(require("../Category"));

var _ClassResource = _interopRequireDefault(require("../ClassResource"));

var _CourseResource = _interopRequireDefault(require("../CourseResource"));

var _LineItem = _interopRequireDefault(require("../LineItem"));

var _Result = _interopRequireDefault(require("../Result"));

var _Resource = _interopRequireDefault(require("../Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EntityFactory {
  constructor() {}

  static async createCollections(storage, relationConfig) {
    const typeToClassMap = {
      academicSessions: _AcademicSession.default,
      classes: _ClassRoom.default,
      courses: _Course.default,
      demographics: _Demographic.default,
      enrollments: _Enrollment.default,
      orgs: _Organisation.default,
      users: _User.default,
      categories: _Category.default,
      classResources: _ClassResource.default,
      courseResources: _CourseResource.default,
      lineItems: _LineItem.default,
      results: _Result.default,
      resources: _Resource.default
    };
    let entityCollections = [];
    entityCollections = await storage.findAllEntity();
    const result = {};

    for (const entityType in entityCollections) {
      const allResults = entityCollections[entityType];
      const entityName = typeToClassMap[entityType];
      let index = 0;
      let allObjs = {};

      for (const key in allResults) {
        let id = allResults[key]['sourcedId'];
        let objNew = new entityName();
        objNew.setId(id);
        objNew.setStorage(storage);
        objNew.setRelationConfig(relationConfig);
        allObjs[index++] = objNew;
      }

      result[entityType] = allObjs;
    }

    const jsonData = {};

    for (const key in result) {
      jsonData[key] = await this.prototype.convertData(result[key]);
    }

    return jsonData;
  }

  static async createCollection(entityName, storage, relationConfig, inResults = null) {
    if (typeof entityName === 'function' && !this.prototype.classExists(entityName)) {
      throw new Error(`${entityName} not a valid class`);
    }

    let obj = new entityName();
    let allObjs = {};
    let allResults = [];

    if (_lodash.default.isEmpty(inResults)) {
      allResults = await storage.findByType(obj.constructor.getType());
    } else {
      allResults = inResults;
    }

    let index = 0;

    for (const key in allResults) {
      let id = allResults[key]['sourcedId'];
      let objNew = new entityName();
      objNew.setId(id);
      objNew.setStorage(storage);
      objNew.setRelationConfig(relationConfig);
      allObjs[index++] = objNew;
    }

    return allObjs;
  }

  static create(id, entityName, storage, relationConfig) {
    if (!this.prototype.classExists(entityName)) {
      throw new Error(`${entityName} not a valid class`);
    }

    let obj = new entityName();
    obj.setId(id);
    obj.setStorage(storage);
    obj.setRelationConfig(relationConfig);
    return obj;
  }

  classExists(entityName) {
    const ExistingEntityClasses = ['AbstractEntity', 'AcademicSession', 'Category', 'ClassResource', 'ClassRoom', 'Course', 'CourseResource', 'Demographic', 'Enrollment', 'LineItem', 'Organisation', 'Resource', 'Result', 'User'];

    if (ExistingEntityClasses.indexOf(entityName.name) !== -1) {
      return true;
    }

    return false;
  }

  async convertData(entityObjects) {
    let result = [];

    for (const key in entityObjects) {
      const entityObject = entityObjects[key];
      const data = await entityObject.getData();
      result.push(data);
    }

    return result;
  }

}

exports.default = EntityFactory;