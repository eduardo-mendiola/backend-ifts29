const BaseController = require('./BaseController');
const Client = require('../models/ClientModel'); 

class ClientController extends BaseController {
    constructor() {
        super(Client, 'client'); 
    }


}

module.exports = new ClientController();
