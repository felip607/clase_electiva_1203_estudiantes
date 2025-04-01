import mongoose from 'mongoose';

const { Schema } = mongoose;

const EstudianteSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'El id es requerido'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    curso: {
        type: String,
        required: [true, 'El curso es requerido']
    },
    maestro: {
        type: Schema.Types.ObjectId,
        ref: 'Maestro'
    }
});

export const Estudiante = mongoose.model('Estudiante', EstudianteSchema);