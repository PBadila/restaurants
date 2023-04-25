var express = require('express');
var router = express.Router();

/* GET menuItems listing. */
router.get('./menuItems', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;