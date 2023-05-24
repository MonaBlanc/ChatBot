const router = require('express').Router();
const controller = require('../controllers/controller');

router.get('/random', controller.randomMeal);
router.get('/formMeal', controller.formMeal);

module.exports = router;
