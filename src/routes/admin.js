let express = require("express");
let router = express.Router();
let { admin } = require("../controllers/adminController");
const userLogs = require('../middlewares/userLogs');

router.get('/admin', userLogs, admin);

module.exports = router;