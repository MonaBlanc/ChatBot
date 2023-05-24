const router = require('express').Router();
const controller = require('../controllers/controller');
const loginController = require('../controllers/loginController');
router.post('/register', loginController.register);
router.post('/login', loginController.login);
router.get('/random', controller.randomMeal);
router.get('/formMeal', controller.formMeal);

module.exports = router;
