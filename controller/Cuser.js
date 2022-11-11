const { Visitor } = require("../models");
const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("creat >>", result); //{}
    res.send(result);
  });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.postSignin = (req, res) => {
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("findAllsign >>", result); // [{}]
    if (result === null) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};

exports.postProfile = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("findOneprofile >>", result); // {}
    if (result === null) {
      res.redirect("/user/signin");
    } else {
      res.render("profile", { data: result });
    }
  });
};

exports.editProfile = (req, res) => {
  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("update >>", result); // update >> [ 1 ]
    res.send("수정성공!!");
  });
};

exports.deleteProfile = (req, res) => {
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("destroy >> ", result); // destroy >> 1
    res.send("삭제 성공!!!!");
  });
};
