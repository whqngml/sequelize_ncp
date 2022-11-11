const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();
//localhost:PORT/user

router.get("/", controller.main);

router.get("/signup", controller.getSignup);
router.post("/signup", controller.postSignup);

router.get("/signin", controller.getSignin);
router.post("/signin", controller.postSignin);

// POST / => localhost:PORT/user/profile
router.post("/profile", controller.postProfile);
// POST / => localhost:PORT/user/profile/edit
router.post("/profile/edit", controller.editProfile);
// POST / => localhost:PORT/user/profile/delete
router.post("/profile/delete", controller.deleteProfile);

// module.exports 를 통해서 router 등록
// -> 다른 파일에서도 사용 가능
module.exports = router;
