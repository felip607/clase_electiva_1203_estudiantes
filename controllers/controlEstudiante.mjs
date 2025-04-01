import { Estudiante } from '../models/estudiantes.mjs';

// Obtener todos los estudiantes
export async function getAll(req, res) {
    try {
        const estudiantes = await Estudiante.find();
        res.status(200).json({ state: true, data: estudiantes });
    } catch (err) {
        res.status(500).json({ state: false, data: 'Error al obtener los estudiantes', error: err.message });
    }
}

// Obtener un estudiante por ID
export async function getById(req, res) {
    const { id } = req.params;
    try {
        const estudiante = await Estudiante.findOne({ id });
        if (!estudiante) {
            return res.status(404).json({ state: false, data: 'Estudiante no encontrado' });
        }
        res.status(200).json({ state: true, data: estudiante });
    } catch (err) {
        res.status(500).json({ state: false, data: 'Error al obtener el estudiante', error: err.message });
    }
}

// Crear un nuevo estudiante
export async function save(req, res) {
    try {
        const { id } = req.body;
        const existingEstudiante = await Estudiante.findOne({ id });
        if (existingEstudiante) {
            return res.status(400).json({ state: false, data: 'El id ya existe' });
        }
        const estudiante = new Estudiante(req.body);
        const savedEstudiante = await estudiante.save();
        res.status(200).json({ state: true, data: savedEstudiante });
    } catch (err) {
        res.status(500).json({ state: false, data: 'Error al guardar el estudiante', error: err.message });
    }
}

// Actualizar un estudiante
export async function updated(req, res) {
    const { id } = req.params;
    const { name, curso } = req.body;
    try {
        const updatedEstudiante = await Estudiante.findOneAndUpdate(
            { id },
            { name, curso },
            { new: true }
        );
        if (!updatedEstudiante) {
            return res.status(404).json({ state: false, data: 'Estudiante no encontrado' });
        }
        res.status(200).json({ state: true, data: updatedEstudiante });
    } catch (err) {
        res.status(500).json({ state: false, data: 'Error al actualizar el estudiante', error: err.message });
    }
}

// Eliminar un estudiante
export async function borrar(req, res) {
    const { id } = req.params;
    try {
        const deletedEstudiante = await Estudiante.deleteOne({ id });
        if (deletedEstudiante.deletedCount === 0) {
            return res.status(404).json({ state: false, data: 'Estudiante no encontrado' });
        }
        res.status(200).json({ state: true, data: `Estudiante con id ${id} eliminado` });
    } catch (err) {
        res.status(500).json({ state: false, data: 'Error al eliminar el estudiante', error: err.message });
    }
}