const BaseController = require("./BaseController");
const Role = require('../models/RoleModel');

class RoleController extends BaseController {
    constructor() {
        super(Role);
    }
}

module.exports = new RoleController();