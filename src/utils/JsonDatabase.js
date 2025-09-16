const fs = require('fs').promises;
const path = require('path');

class JsonDatabase {
    constructor(fileName = 'db.json') {
        this.filePath = path.join(__dirname, '..', 'data', fileName);
        this.data = {};
        this.initialized = false;
    }

    async initialize() {
        if (!this.initialized) {
            await this.loadData();
            this.initialized = true;
        }
    }

    async loadData() {
        try {
            const fileData = await fs.readFile(this.filePath, 'utf8');
            this.data = JSON.parse(fileData);
            console.log('Base de datos cargada desde', this.filePath);
        } catch (error) {
            if (error.code === 'ENOENT') {
                this.data = {};
                await this.saveData();
                console.log('Archivo de base de datos creado en', this.filePath);
            } else {
                console.error('Error al cargar la base de datos:', error);
            }
        }
    }

    async saveData() {
        await fs.writeFile(this.filePath, JSON.stringify(this.data, null, 2), 'utf8');
    }

    getCollection(name) {
        if (!this.data[name]) this.data[name] = [];
        return this.data[name];
    }

    setCollection(name, collectionData) {
        this.data[name] = collectionData;
    }
}

module.exports = JsonDatabase;
