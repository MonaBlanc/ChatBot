const router = require('express').Router();
const controller = require('../controllers/controller');

router.post('/', controller.home);
router.post('/chatbot', controller.chatbot);


module.exports = router;
