const router = require('express').Router();
const controller = require('../controllers/controller');
const loginController = require('../controllers/login-controller');

router.post('/register', loginController.register);
router.post('/login', loginController.login);
router.get('/random', controller.randomMeal);
router.get('/formMeal', controller.formMeal);
router.get('/grocery-list', controller.getUserGroceryList);
router.post('/grocery-list', controller.setUserGroceryList);

module.exports = router;
