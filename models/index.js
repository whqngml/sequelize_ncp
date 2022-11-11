// sequelize-cli가 자동 생성한 파일
"use strict";

// const fs = require('fs'); // 필요없음
// const path = require('path'); // 필요없음
const Sequelize = require("sequelize");
// const process = require('process'); // 필요없음
// const basename = path.basename(__filename); // 필요없음
// const env = process.env.NODE_ENV || 'development'; // 필요없음
const config = require(__dirname + "/../config/config.json")["production"];
// const a = require(__dirname + '/../config/config.json')
// const a = {
//   "development": {
//     "username": "user",
//     "password": "1234",
//     "database": "kdt",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {},
//   "production": {}
// }
// const config = a['development']
const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// } // 아래꺼로 변환

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체 선언시 매개변수로 정보들을 받음

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// }); // 필요없음

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize: sequelize, Sequelize: Sequelize }

db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

// models/Visitor.js 정의한 model이 db.Visitor에 들어감
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor: model }

module.exports = db;
// db 변수 내보냄 -> 다른 파일에서 사용하기 때문
