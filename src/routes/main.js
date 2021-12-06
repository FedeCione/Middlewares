let express = require("express");
let router = express.Router();
let { home } = require("../controllers/mainController");
const userLogs = require('../middlewares/userLogs');

router.get('/home', userLogs, home);

module.exports = router;