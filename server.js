require('dotenv').config();
const app = require('./src/app');
const db = require('./src/config/db');
const PORT = process.env.PORT || 3000;

(async () => {
    await db.initialize(); // Se carga la DB
    console.log('DB lista');

    // Arranca el servidor
    app.listen(PORT, () => {
        console.log(`Servidor de ClickWave corriendo en http://localhost:${PORT}`);
    });
})();
