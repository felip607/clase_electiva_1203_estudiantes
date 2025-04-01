import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extrae el token del encabezado Authorization
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token con la clave secreta
        req.user = decoded; // Adjunta los datos del token al objeto `req`
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }
};