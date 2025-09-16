const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/RoleController');

router.post('/', rolesController.create);

router.get('/', rolesController.getAll);

router.get('/:id', rolesController.getById);

router.put('/:id', rolesController.update);

router.patch('/:id', rolesController.patch);

router.delete('/:id', rolesController.delete);

module.exports = router;