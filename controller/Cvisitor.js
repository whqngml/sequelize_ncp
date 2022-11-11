// [Before]
// const Visitor = require("../models/Visitor");
// [After]
const { Visitor } = require("../models");
const models = require("../models"); // ../models/index.js
// models = { sequelize: sequelize, Sequelize: Sequelize, Visitor: model }

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  //   before
  // Visitor.getVisitors((result) => {
  //   console.log("Cvisitor.js", result); // [{},{},{},{}]
  //   res.render("visitor", { data: result });
  // });
  // after
  // "SELECT * FROM visitor"
  models.Visitor.findAll().then((result) => {
    console.log("findAll >>", result);
    res.render("visitor", { data: result });
  });
};

exports.getVisitor = (req, res) => {
  // before
  // console.log(req.query); // { id: '1' }
  // console.log(req.query.id); // '1'

  // Visitor.getVisitor(req.query.id, (result) => {
  //   console.log("Cvisitor.js", result);
  //   res.send(result);
  // });

  // after
  // SELECT * FROM visitor WHERE id=${id}
  // SELECT * FROM visitor WHERE id=${req.query.id}
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    console.log("findOne >>", result); // {}
    res.send(result);
  });
};

exports.postVisitor = (req, res) => {
  // before
  // console.log(req.body);

  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js", result);
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });

  // after
  // INSERT INTO visitor (name, comment) VALUES('${data.name}', comment='${data.comment}'
  // INSERT INTO visitor (name, comment) VALUES('${req.body.name}', comment='${req.body.comment}'
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log("creat >>", result); //{}
    res.send(result);
  });
};

exports.patchVisitor = (req, res) => {
  // before
  // console.log(req.body);

  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js", result);
  //   res.send("수정 성공!!!");
  // });

  // after
  // UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id='${data.id}'
  // UPDATE visitor SET name='${req.body.name}', comment='${req.body.comment}' WHERE id='${req.body.id}'
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("update >>", result); // update >> [ 1 ]
    res.send("수정성공!");
  });
};

exports.deleteVisitor = (req, res) => {
  // before
  // console.log(req.body); // { id: '1' }
  // console.log(req.body.id); // 1

  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log("Cvisitor.js: ", result);
  //   res.send("삭제성공");
  // });

  // after
  // DELETE FROM visitor WHERE id=${id}
  // DELETE FROM visitor WHERE id=${req.body.id}
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("destroy >> ", result); // destroy >> 1
    res.send("삭제 성공!!!!");
  });
};
