import jwt from 'jsonwebtoken';

// Middleware para verificar el token JWT
export function verifyToken(req, res, next) {
    const token = req.headers['authorization']; // El token debe enviarse en el encabezado "Authorization"

    if (!token) {
        return res.status(403).json({ state: false, message: 'No se proporcionó un token' });
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Agregar los datos del token decodificado al objeto `req`
        next(); // Continuar con la siguiente función del middleware
    } catch (err) {
        res.status(401).json({ state: false, message: 'Token inválido', error: err.message });
    }
}