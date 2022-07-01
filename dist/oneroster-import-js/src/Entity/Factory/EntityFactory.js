"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EntityFactory {
  constructor() {}

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

}

exports.default = EntityFactory;