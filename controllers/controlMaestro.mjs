import { Maestro } from '../models/maestro.mjs';

async function getAll(req, res) {
    try {
        const maestros = await Maestro.find(); // Consulta todos los registros en la colección
        return res.status(200).json({ "state": true, "data": maestros });
    } catch (err) {
        return res.status(500).json({ "state": false, "data": "Error al obtener los datos", "error": err.message });
    }
}

async function getById(req, res) {
    const { id } = req.params;
    try {
        const maestro = await Maestro.findOne({ id }); // Busca un registro por id
        if (!maestro) {
            return res.status(404).json({ "state": false, "data": "Maestro no encontrado" });
        }
        return res.status(200).json({ "state": true, "data": maestro });
    } catch (err) {
        return res.status(500).json({ "state": false, "data": "Error al obtener el maestro", "error": err.message });
    }
}

async function save(req, res) {
    try {
        const { id } = req.body;
        const existingMaestro = await Maestro.findOne({ id });
        if (existingMaestro) {
            return res.status(400).json({ "state": false, "data": "El id ya existe" });
        }
        const maestro = new Maestro(req.body); // Crear una instancia del modelo
        const savedMaestro = await maestro.save(); // Guardar en la base de datos

        return res.status(200).json({ "state": true, "data": savedMaestro }); // Retornar el objeto guardado
    } catch (err) {
        return res.status(500).json({ "state": false, "data": "Error al guardar", "error": err.message });
    }
}

async function updated(req, res) {
    const { id } = req.params;
    const { name, age } = req.body;
    try {
        const updatedMaestro = await Maestro.findOneAndUpdate(
            { id }, // Filtro
            { name, age }, // Datos a actualizar
            { new: true } // Devuelve el documento actualizado
        );
        if (!updatedMaestro) {
            return res.status(404).json({ "state": false, "data": "Maestro no encontrado" });
        }
        return res.status(200).json({ "state": true, "data": updatedMaestro });
    } catch (err) {
        return res.status(500).json({ "state": false, "data": "Error al actualizar", "error": err.message });
    }
}

async function borrar(req, res) {
    const { id } = req.params;
    try {
        const deletedMaestro = await Maestro.deleteOne({ id });
        if (deletedMaestro.deletedCount === 0) {
            return res.status(404).json({ "state": false, "data": "Maestro no encontrado" });
        }
        return res.status(200).json({ "state": true, "data": `Registro con id ${id} borrado` });
    } catch (err) {
        return res.status(500).json({ "state": false, "data": "Error al borrar", "error": err.message });
    }
}

export { getAll, getById, save, updated, borrar };