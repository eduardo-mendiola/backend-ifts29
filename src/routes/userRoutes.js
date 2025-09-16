const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
// const { validateUserInput } = require('../middleware/validationMiddleware');

router.post('/', userController.create);

router.get('/', userController.getAll);

router.get('/:id', userController.getById);

router.put('/:id', userController.update);

router.patch('/:id', userController.patch);

router.delete('/:id', userController.delete);


module.exports = router
