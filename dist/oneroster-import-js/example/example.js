"use strict";

var _path = _interopRequireDefault(require("path"));

var _index = require("../src/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  const fileHandler = new _index.FileHandler();
  const importService = new _index.ImportService(fileHandler);

  const __dirname = _path.default.resolve();

  importService.setPathToFolder(__dirname + '/dist/oneroster-import-js/data/samples/OneRosterv1p1BaseCSV/');
  const storage = new _index.CsvStorage(importService);
  const relationConfig = new _index.RelationConfigFactory(fileHandler).create();
  const entityRepository = new _index.EntityRepository(storage, relationConfig); // const orgs = await entityRepository.getAll(Organisation)

  const users = await entityRepository.getAll(_index.User);
  const orgs = await entityRepository.getAll(_index.Organisation);
  const user = await entityRepository.get('user1', _index.User);
  const org = await user.getOrgs();
  console.log(org);

  const convertData = async entityObjects => {
    let result = [];

    for (const key in entityObjects) {
      const entityObject = entityObjects[key];
      const data = await entityObject.getData();
      result.push(data);
    }

    return result;
  };

  const data = await convertData(users);
  console.log(data);
})();