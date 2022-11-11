const User = function (Sequelize, DataTypes) {
  // 변수이름과 파일명 동일하게 작성
  // Sequelize: models/index.js 의 sequelize
  // Datatypes: models/index.js 의 Sequelize
  //   Sequelize.define(param1, param2, param3)
  // param1: 모델이름 설정 ->''
  // param2: 컬럼 정의 -> {}
  // param3: 모델 옵션 정의 -> {}
  const model = Sequelize.define(
    "user",
    {
      // id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // userid VARCHAR(20) NOT NULL,
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // name VARCHAR(10) NOT NULL
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      // pw VARCHAR(20) NOT NULL
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user", // 실제 DB의 테이블 이름
      freezeTablename: true, // 테이블 이름 고정
      timestamps: false, // 데이터가 추가/수정되는 시간을 자동으로 컬럼 만들어서 기록
    }
  );

  return model;
};

module.exports = User;
