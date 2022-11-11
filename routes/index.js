const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// "경로 설정" = 라우팅
// 기본 경로: localhost:PORT/

// GET / => localhost:PORT/
router.get("/", controller.main);

// GET / => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors); // 전체조회

// GET / => localhost:PORT/visitor/get
router.get("/visitor/get", controller.getVisitor); // 하나조회

// POST /visitor/write => localhost:PORT/visitor/write
router.post("/visitor/write", controller.postVisitor); // 하나추가

// PATCH /visitor/edit => localhost:PORT/visitor/edit
router.patch("/visitor/edit", controller.patchVisitor); // 하나수정

// DELETE /visitor/delete => localhost:PORT/visitor/delete
router.delete("/visitor/delete", controller.deleteVisitor); // 하나 삭제

module.exports = router;
