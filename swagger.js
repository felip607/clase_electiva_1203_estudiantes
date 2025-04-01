import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gestión de Estudiantes y Maestros',
            version: '1.0.0',
            description: 'Documentación de la API para gestionar estudiantes y maestros',
        },
        servers: [
            {
                url: 'http://localhost:4500', // Servidor local para desarrollo
                description: 'Servidor local (desarrollo)',
            },
            {
                url: 'https://<nombre-de-tu-aplicacion>.herokuapp.com', // Cambia esto por el nombre de tu aplicación en Heroku
                description: 'Servidor de producción (Heroku)',
            },
        ],
    },
    apis: ['./routes/*.mjs'], // Ruta a los archivos donde están definidos los endpoints
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Swagger docs disponibles en http://localhost:4500/api-docs');
};