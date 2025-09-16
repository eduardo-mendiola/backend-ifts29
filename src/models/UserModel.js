const BaseModel = require('./BaseModel');
const UserEntity = require('../entities/UserEntity');
const IdGenerator = require('../utils/IdGenerator');
const db = require('../config/db');

const userIdGen = new IdGenerator(db, 'users');

class UserModel extends BaseModel {
    constructor() {
        super('users', UserEntity); 
        this.idGen = userIdGen;
    }

    // Sobrescribir create para usar el ID generado
    async create(data) {
        data.id = this.idGen.generateId();     
        const timestamp = new Date().toISOString();
        data.created_at = timestamp;
        data.updated_at = timestamp;
        return super.create(data);              
    }

    // Sobrescribir update para actualizar timestamp
    async update(id, updateData) {
        updateData.updated_at = new Date().toISOString();
        return super.update(id, updateData);    
    }
}


module.exports = new UserModel();

