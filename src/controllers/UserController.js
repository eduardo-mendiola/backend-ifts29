const BaseController = require("./BaseController");
const User = require('../models/UserModel');

class UserController extends BaseController {
    constructor() {
        super(User);
    }
}

module.exports = new UserController();