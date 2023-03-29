const {Router} = require('express');

const mainController = require('../controller/mainController')

const router = Router();

router.get('/', mainController.getIndex)

module.exports = router;