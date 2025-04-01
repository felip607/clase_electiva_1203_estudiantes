import mongoose from 'mongoose';

const { Schema } = mongoose;
const MaestroSchema = new Schema({
    id: {
        type: Number, 
        required: [true, 'El id es requerido'],
        unique: true
    },
    name: {
        type: String, 
        required: [true, 'El nombre es requerido']
    },
    age: {
        type: Number, 
        required: [true, 'La edad es requerida']
    },
    estudiantes: [{
        type: Schema.Types.ObjectId,
        ref: 'Estudiante'
    }]
});

export const Maestro = mongoose.model('Maestro', MaestroSchema);