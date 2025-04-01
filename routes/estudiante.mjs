import express from 'express';
import { getAll, getById, save, updated, borrar } from '../controllers/controlEstudiante.mjs';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Estudiante:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: ID único del estudiante.
 *         name:
 *           type: string
 *           description: Nombre del estudiante.
 *         curso:
 *           type: string
 *           description: Curso del estudiante.
 *         maestro:
 *           type: string
 *           description: ID del maestro asociado.
 *       required:
 *         - id
 *         - name
 *         - curso
 */

/**
 * @swagger
 * /estudiante:
 *   get:
 *     summary: Obtener todos los estudiantes
 *     tags: [Estudiantes]
 *     responses:
 *       200:
 *         description: Lista de estudiantes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Estudiante'
 */
router.get('/', getAll);

/**
 * @swagger
 * /estudiante/{id}:
 *   get:
 *     summary: Obtener un estudiante por ID
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID único del estudiante
 *     responses:
 *       200:
 *         description: Datos del estudiante.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Estudiante'
 *       404:
 *         description: Estudiante no encontrado.
 */
router.get('/:id', getById);

/**
 * @swagger
 * /estudiante:
 *   post:
 *     summary: Crear un nuevo estudiante
 *     tags: [Estudiantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estudiante'
 *     responses:
 *       201:
 *         description: Estudiante creado exitosamente.
 *       400:
 *         description: El ID ya existe.
 */
router.post('/', save);

/**
 * @swagger
 * /estudiante/{id}:
 *   put:
 *     summary: Actualizar un estudiante por ID
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID único del estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estudiante'
 *     responses:
 *       200:
 *         description: Estudiante actualizado exitosamente.
 *       404:
 *         description: Estudiante no encontrado.
 */
router.put('/:id', updated);

/**
 * @swagger
 * /estudiante/{id}:
 *   delete:
 *     summary: Eliminar un estudiante por ID
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID único del estudiante
 *     responses:
 *       200:
 *         description: Estudiante eliminado exitosamente.
 *       404:
 *         description: Estudiante no encontrado.
 */
router.delete('/:id', borrar);

export default router;