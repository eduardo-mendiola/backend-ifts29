const validateClientInput = (req, res, next) => {
    const { name, contact_name, email } = req.body;
    if (!name || !contact_name || !email) {
        return res.status(400).json({ message: 'Nombre de la empresa, el nombre del contacto y el email son campos obligatorios.' });
    }
    // Falan agregar validaciones mas complejas como para el email
    next(); 
};


module.exports = {
    validateClientInput,
    // validateUserInput,
    // validateRoleInput,
};
