const BaseModel = require('./BaseModel'); 
const ClientEntity = require('../entities/ClientEntity'); 
const IdGenerator = require('../utils/IdGenerator');
const db = require('../config/db');


const clientIdGen = new IdGenerator(db, 'clients');

class ClientModel extends BaseModel {
    constructor() {
        super('clients', ClientEntity, 'client'); 
        this.idGen = clientIdGen;       
    }

    // Sobrescribimos create para usar nuestro generador de IDs
    async create(data) {
        data.id = this.idGen.generateId();
        return super.create(data); 
    }
}


module.exports = new ClientModel();

