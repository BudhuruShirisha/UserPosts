const express = require("express");
const { getUserPosts } = require("../controller/user");
const router = express.Router();

router.get("/", getUserPosts)

module.exports = router;