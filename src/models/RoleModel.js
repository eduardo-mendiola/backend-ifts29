const BaseModel = require('./BaseModel');
const RoleEntity = require('../entities/RoleEntity');
const IdGenerator = require('../utils/IdGenerator');
const db = require('../config/db');

const roleIdGen = new IdGenerator(db, 'roles');

class RoleModel extends BaseModel {
    constructor() {
        super('roles', RoleEntity); 
        this.idGen = roleIdGen;
    }

    // Sobrescribir create para usar ID generado
    async create(data) {
        data.id = this.idGen.generateId();
        return super.create(data);  
    }

    async update(id, updateData) {
        return super.update(id, updateData); 
    }
}


module.exports = new RoleModel();
