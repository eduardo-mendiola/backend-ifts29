import BaseController from './BaseController.js';
import Role from '../models/RoleModel.js';

class RoleController extends BaseController {
    constructor() {
        super(Role);
    }
}

export default new RoleController();
