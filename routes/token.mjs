import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

/**
 * @swagger
 * /token:
 *   get:
 *     summary: Generar un token JWT
 *     tags: [Token]
 *     responses:
 *       200:
 *         description: Token generado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT generado.
 */
router.get('/', (req, res) => {
    // Genera un token con una clave secreta y un tiempo de expiración
    const token = jwt.sign({ app: 'clase_electiva_1203' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

export default router; // Exporta el router como valor por defecto