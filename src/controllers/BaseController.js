class BaseController {
    constructor(model) {
        this.model = model; // Modelo asociado a la entidad
    }

    // Operación CREATE (POST /entidad)
    create = async (req, res) => {
        try {
            const newItem = await this.model.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            console.error('Error al crear:', error.message);
            res.status(500).json({ message: 'Error interno del servidor al crear.' });
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

module.exports = BaseController;
