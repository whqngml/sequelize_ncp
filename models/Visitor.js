// CREATE TABLE visitor (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(10) NOT NULL,
//     comment mediumtext
// );

// visitor 모델(-> 테이블 구조) 정의
// sequelize 모델이랑 mysql table 연결
const Visitor = function (Sequelize, DataTypes) {
  // 변수이름과 파일명 동일하게 작성
  // Sequelize: models/index.js 의 sequelize
  // Datatypes: models/index.js 의 Sequelize
  //   Sequelize.define(param1, param2, param3)
  // param1: 모델이름 설정 ->''
  // param2: 컬럼 정의 -> {}
  // param3: 모델 옵션 정의 -> {}
  const model = Sequelize.define(
    "visitor",
    {
      // id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // name VARCHAR(10) NOT NULL
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      // comment mediumtext
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", // 실제 DB의 테이블 이름
      freezeTablename: true, // 테이블 이름 고정
      timestamps: false, // 데이터가 추가/수정되는 시간을 자동으로 컬럼 만들어서 기록
    }
  );

  return model;
};

module.exports = Visitor;
