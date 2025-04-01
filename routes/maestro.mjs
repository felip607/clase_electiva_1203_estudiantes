import { getAll, getById, save, updated, borrar } from './../controllers/controlMaestro.mjs';
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Maestro:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: ID único del maestro.
 *         name:
 *           type: string
 *           description: Nombre del maestro.
 *         age:
 *           type: number
 *           description: Edad del maestro.
 *       required:
 *         - id
 *         - name
 *         - age
 */

/**
 * @swagger
 * /maestro:
 *   get:
 *     summary: Obtener todos los maestros
 *     tags: [Maestros]
 *     responses:
 *       200:
 *         description: Lista de maestros.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Maestro'
 */
router.get('/', getAll);

/**
 * @swagger
 * /maestro/{id}:
 *   get:
 *     summary: Obtener un maestro por ID
 *     tags: [Maestros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID único del maestro
 *     responses:
 *       200:
 *         description: Datos del maestro.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Maestro'
 *       404:
 *         description: Maestro no encontrado.
 */
router.get('/:id', getById);

/**
 * @swagger
 * /maestro:
 *   post:
 *     summary: Crear un nuevo maestro
 *     tags: [Maestros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Maestro'
 *     responses:
 *       201:
 *         description: Maestro creado exitosamente.
 *       400:
 *         description: El ID ya existe.
 */
router.post('/', save);

/**
 * @swagger
 * /maestro/{id}:
 *   put:
 *     summary: Actualizar un maestro por ID
 *     tags: [Maestros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID único del maestro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Maestro'
 *     responses:
 *       200:
 *         description: Maestro actualizado exitosamente.
 *       404:
 *         description: Maestro no encontrado.
 */
router.put('/:id', updated);

/**
 * @swagger
 * /maestro/{id}:
 *   delete:
 *     summary: Eliminar un maestro por ID
 *     tags: [Maestros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID único del maestro
 *     responses:
 *       200:
 *         description: Maestro eliminado exitosamente.
 *       404:
 *         description: Maestro no encontrado.
 */
router.delete('/:id', borrar);

export default router;
