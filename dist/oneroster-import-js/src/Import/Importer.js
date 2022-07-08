"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _NotUniqueEntityException = _interopRequireDefault(require("../Schema/NotUniqueEntityException.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _schemaValidator = /*#__PURE__*/new WeakMap();

class Importer {
  constructor(schemaValidator) {
    _classPrivateFieldInitSpec(this, _schemaValidator, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _schemaValidator, schemaValidator);
  }

  import(header = [], data = [], type) {
    let result = {};
    let validationErrors = [];
    let count = 0;
    let index = 0;
    data.forEach(row => {
      index++;
      let rowWithHeader = {};

      for (let i = 0; i < Math.min(header.length, row.length); i++) {
        rowWithHeader[header[i]] = row[i];
      }

      try {
        var _rowWithHeader;

        rowWithHeader = _classPrivateFieldGet(this, _schemaValidator).validate(rowWithHeader);

        if (!_lodash.default.isEmpty((_rowWithHeader = rowWithHeader) === null || _rowWithHeader === void 0 ? void 0 : _rowWithHeader['sourcedId'])) {
          if (rowWithHeader['sourcedId'] in result === true) {
            throw new _NotUniqueEntityException.default(rowWithHeader['sourcedId']);
          }

          result[rowWithHeader['sourcedId']] = rowWithHeader;
        } else {
          // TODO
          result[count++] = rowWithHeader;
        }
      } catch (e) {
        // validationError = [fileName, rowNo, sourcedId, errorMessage]
        let validationError = [`${type}.csv`, index, rowWithHeader['sourcedId'], e.message || ''];
        validationErrors.push(validationError);
      }
    });
    return {
      result,
      validationErrors
    };
  }

}

exports.default = Importer;