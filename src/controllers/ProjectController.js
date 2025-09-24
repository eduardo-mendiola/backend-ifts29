import fs from 'fs';
import path from 'path';
import BaseController from './BaseController.js';
import Project from '../models/ProjectModel.js';

class ProjectController extends BaseController {
    constructor() {
        super(Project, 'project'); 
       
        this.dbPath = path.join(process.cwd(), 'src', 'data', 'db.json');
    }

    // método para leer datos desde db.json
    readDB = () => { 
    try {
        const rawData = fs.readFileSync(this.dbPath, 'utf-8');
        return JSON.parse(rawData);
    } catch (err) {
        console.error('Error leyendo db.json:', err.message);
        return { clients: [], users: [] }; // valores por defecto para que el form no rompa
    }
  }
 
 
  // Sobrescribimos editView para proyectos
    newView = async (req, res) => {
    try {
        const db = this.readDB();    
       // console.log('Clientes cargados:', db.clients);
       
        const clients = db.clients || [];
        const managers = (db.users || []).filter(u => ["1", "2", "3"].includes(u.role_id.toString()));
     
        console.log('Managers:', managers);

        res.render(`${this.viewPath}/form`, {
            title: 'Nuevo Proyecto',
            item: {},
            clients,
            managers
        });
    } catch (error) {
        console.error('Error al abrir formulario de proyecto:', error.message);
        res.status(500).render('error500', { title: 'Error de servidor' });
    }
}
    editView = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await this.model.findById(id);
        if (!item) return res.render('error404', { title: 'Proyecto no encontrado' });

        const db = this.readDB();
        const clients = db.clients || [];
        const managers = (db.users || []).filter(u => ["1", "2", "3"].includes(u.role_id.toString()));

        res.render(`${this.viewPath}/form`, {
            title: 'Editar Proyecto',
            item,
            clients,
            managers
        });
    } catch (error) {
        console.error('Error al abrir formulario de edición:', error.message);
        res.status(500).render('error500', { title: 'Error de servidor' });
        }
    }



  }

export default new ProjectController();
