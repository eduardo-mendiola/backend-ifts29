const db = require('../config/db');
const IdGenerator = require('../utils/IdGenerator');

class BaseModel {
    constructor(collectionName, EntityClass) {
        this.collectionName = collectionName;
        this.EntityClass = EntityClass;
        this.idGen = new IdGenerator(db, collectionName);
    }

    async create(data) {
        const collection = db.getCollection(this.collectionName);
        const newItem = new this.EntityClass(
            this.idGen.generateId(),
            ...Object.values(data) 
        );
        collection.push(newItem);
        db.setCollection(this.collectionName, collection);
        await db.saveData();
        return newItem;
    }

    async findAll() {
        return db.getCollection(this.collectionName);
    }

    async findById(id) {
        const collection = db.getCollection(this.collectionName);
        return collection.find(item => String(item.id) === String(id));
    }

    async update(id, updateData) {
        const collection = db.getCollection(this.collectionName);
        const index = collection.findIndex(item => String(item.id) === String(id));
        if (index === -1) return null;

        collection[index] = { ...collection[index], ...updateData, id };
        db.setCollection(this.collectionName, collection);
        await db.saveData();
        return collection[index];
    }

    async delete(id) {
        const collection = db.getCollection(this.collectionName);
        const initialLength = collection.length;
        const updatedCollection = collection.filter(item => item.id !== id);

        if (updatedCollection.length < initialLength) {
            db.setCollection(this.collectionName, updatedCollection);
            await db.saveData();
            return true;
        }
        return false;
    }
}

module.exports = BaseModel;
