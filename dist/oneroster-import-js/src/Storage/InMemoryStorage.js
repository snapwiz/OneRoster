"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class InMemoryStorage {
  constructor(state = {}) {
    this.state = state;
  }

  findByType(typeOfEntity) {
    return this.state[typeOfEntity];
  }

  findbyTypeAndId(typeOfEntity, id) {
    return this.state[typeOfEntity][id];
  }

}

exports.default = InMemoryStorage;