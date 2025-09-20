class BaseController {
    constructor(model, viewPath) {
        this.model = model; // Modelo asociado a la entidad
        this.viewPath = viewPath;     // Ruta base de las vistas, ej: 'client'
    }

    // Método para obtener todos los clientes para la vista Pug
    getAllView = async (req, res) => {
        try {
            // para simular el error 500 y probar error500.pug
            //throw new Error("Simulated server error");

            const items = await this.model.findAll();
            res.render(`${this.viewPath}/list`, {
                title: `Lista de ${this.viewPath}`,
                items
            });
        } catch (error) {
            console.error(`Error al obtener todos en vista (${this.viewPath}):`, error.message);
            // res.status(500).send('Error interno del servidor al obtener datos.');
            res.render('error500', { tittle: 'Error de servidor'});
        }
    }

    getByIdView = async (req, res) => {
        try {
            const { id } = req.params;
            const item = await this.model.findById(id);
            if (!item) {
                // return res.status(404).send(`${this.viewPath} no encontrado.`);
                res.render('error404', { title: `${this.viewPath} no encontrado.`});
            }

            if (req.originalUrl.includes('/edit')) {
                res.render(`${this.viewPath}/form`, {
                    title: `Editar ${this.viewPath}`,
                    item
                });
            } else {
                res.render(`${this.viewPath}/details`, {
                    title: `Detalles del ${this.viewPath}`,
                    item
                });
            }
        } catch (error) {
            console.error(`Error al obtener por ID en vista (${this.viewPath}):`, error.message);
            //res.status(500).send('Error interno del servidor al obtener datos.');
            res.render('error500', { tittle: 'Error de servidor'});
        }
    }

    // Para API (Postman, Thunder Client)
create = async (req, res) => {
  try {
    const newItem = await this.model.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error al crear (API):', error.message);
    res.status(500).json({ message: 'Error interno del servidor al crear.' });
  }
}

    // Operación CREATE (POST /entidad)
    createView = async (req, res) => {
    try {
        // Guarda el cliente en la base de datos usando tu modelo
        const newItem = await this.model.create(req.body);

        // Redirige a la lista de clientes después de crear
        res.redirect('/clients');
    } catch (error) {
        console.error('Error al crear:', error.message);
        // Si hay un error, renderiza una página de error
        res.status(500).render('error500', { title: 'Error de servidor' });
    }
}
    // Operación READ ALL (GET /entidad)
    getAll = async (req, res) => {
        try {
            const items = await this.model.findAll();
            res.status(200).json(items);
        } catch (error) {
            console.error('Error al obtener todos:', error.message);
            res.status(500).json({ message: 'Error interno del servidor al obtener todos.' });
        }
    }

    // Operación READ ONE (GET /entidad/:id)
    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const item = await this.model.findById(id);
            if (!item) {
                return res.status(404).json({ message: 'No encontrado.' });
            }
            res.status(200).json(item);
        } catch (error) {
            console.error('Error al obtener por ID:', error.message);
            res.status(500).json({ message: 'Error interno del servidor al obtener por ID.' });
        }
    }

    // Operación UPDATE (PUT /entidad/:id)
    update = async (req, res) => {
        try {
            const { id } = req.params;
            const updatedItem = await this.model.update(id, req.body);
            if (!updatedItem) {
                return res.status(404).json({ message: 'No encontrado para actualizar.' });
            }
            res.status(200).json(updatedItem);
        } catch (error) {
            console.error('Error al actualizar:', error.message);
            res.status(500).json({ message: 'Error interno del servidor al actualizar.' });
        }
    }

    // Operación PATCH (PATCH /entidad/:id)
    patch = async (req, res) => {
        try {
            const { id } = req.params;
            const updatedItem = await this.model.patch(id, req.body);
            if (!updatedItem) {
                return res.status(404).json({ message: 'No encontrado para actualizar.' });
            }
            res.status(200).json(updatedItem);
        } catch (error) {
            console.error('Error al actualizar:', error.message);
            res.status(500).json({ message: 'Error interno del servidor al actualizar.' });
        }
    }
newView = async (req, res) => {
  try {
    res.render(`${this.viewPath}/client-form`, {
      title: `Nuevo ${this.viewPath}`,
      item: {} // objeto vacío para crear un nuevo cliente
    });
  } catch (error) {
    console.error(`Error al abrir formulario (${this.viewPath}):`, error.message);
    res.status(500).render('error500', { title: 'Error de servidor' });
  }
}
    // Operación DELETE (DELETE /entidad/:id)
    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await this.model.delete(id);
            if (!deleted) {
                return res.status(404).json({ message: 'No encontrado o no se pudo eliminar.' });
            }
            res.status(204).send();
        } catch (error) {
            console.error('Error al eliminar:', error.message);
            res.status(500).json({ message: 'Error interno del servidor al eliminar.' });
        }
    }
}

export default BaseController;
