import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Importar rutas de cada entidad
import ClientController from './controllers/ClientController.js';
import clientRoutes from './routes/clientRoutes.js';
import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';

// __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Inicialización y configuración básica
const app = express();

// Configuración de Pug como motor de vistas
app.set('views', join(__dirname,'..', 'views'));
app.set('view engine', 'pug')

// Middlewares
app.use(express.json()); // Middleware para parsear cuerpos de solicitud en formato JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')))

// Rutas para las vistas del CRUD (HTML)

// Ruta de bienvenida 
app.get('/', (req, res) => {
    // res.json({ 
    //     title: 'Bienvenido a la API de ClickWave', 
    //     message: 'Gestiona tus proyectos, clientes y tiempo.' 
    // });
    res.render('index', { title: 'ClickWave' });
});

app.get('/clients', ClientController.getAllView);
app.get('/clients/:id', ClientController.getByIdView);
// app.get('/clients/new', (req, res) => res.render('client-form', { title: 'Nuevo Cliente', client: {} }));
// app.get('/clients/:id/edit', ClientController.getByIdView);

// Rutas base (endpoints de la API)
app.use('/api/client', clientRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

// Manejo de errores 404 para rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ 
        error: 'Página no encontrada',
        message: 'La ruta que intentas acceder no existe.'
    });
});

// Exportar la instancia de la aplicación
export default app;
