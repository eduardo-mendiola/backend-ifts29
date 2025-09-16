const express = require('express');

// Importar rutas de cada entidad
const clientRoutes = require('./routes/clientRoutes');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');


// Inicialización y configuración básica
const app = express();

// Middlewares
app.use(express.json()); // Middleware para parsear cuerpos de solicitud en formato JSON

// Rutas base (endpoints de la API)
app.use('/api/clientRoutes', clientRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

// Ruta de bienvenida 
app.get('/', (req, res) => {
    res.json({ 
        title: 'Bienvenido a la API de ClickWave', 
        message: 'Gestiona tus proyectos, clientes y tiempo.' 
    });
});

// Manejo de errores 404 para rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ 
        error: 'Página no encontrada',
        message: 'La ruta que intentas acceder no existe.'
    });
});

// Exportar la instancia de la aplicación
module.exports = app;
