# Gestión de Estudiantes y Maestros

## **Integrante**
- **Luis Felipe Rodríguez Moreno**

---

## **Descripción General de la API**
La API de Gestión de Estudiantes y Maestros es un servicio RESTful desarrollado en Node.js con Express. Permite realizar operaciones CRUD sobre las entidades `Estudiante` y `Maestro`, y está protegida mediante autenticación basada en tokens JWT. La API utiliza MongoDB Atlas como base de datos y está documentada con Swagger para facilitar su uso.

---

## **Características Principales**
1. **Gestión de Estudiantes**:
   - Crear, leer, actualizar y eliminar estudiantes.
   - Relación con maestros mediante referencias.

2. **Gestión de Maestros**:
   - Crear, leer, actualizar y eliminar maestros.

3. **Autenticación**:
   - Protección de rutas mediante tokens JWT.
   - Generación de tokens JWT a través del endpoint `/token`.

4. **Documentación**:
   - Documentación interactiva disponible en `/api-docs` (Swagger).

---

## **Requisitos Previos**
Antes de interactuar con la API, asegúrate de cumplir con los siguientes requisitos:
1. Tener acceso a la URL de despliegue de la API (https://tallerelectiva-6017de7cd9c1.herokuapp.com).
2. Contar con un token JWT válido para acceder a las rutas protegidas.

---

## **Endpoints Principales**

### **Estudiantes**
- **GET /estudiante**: Obtener todos los estudiantes.
- **GET /estudiante/:id**: Obtener un estudiante por ID.
- **POST /estudiante**: Crear un nuevo estudiante.
- **PUT /estudiante/:id**: Actualizar un estudiante.
- **DELETE /estudiante/:id**: Eliminar un estudiante.

### **Maestros**
- **GET /maestro**: Obtener todos los maestros.
- **GET /maestro/:id**: Obtener un maestro por ID.
- **POST /maestro**: Crear un nuevo maestro.
- **PUT /maestro/:id**: Actualizar un maestro.
- **DELETE /maestro/:id**: Eliminar un maestro.

### **Token**
- **GET /token**: Generar un token JWT válido para acceder a las rutas protegidas.

---

## **Autenticación**
La API utiliza tokens JWT para proteger las rutas. Para interactuar con las rutas protegidas:
1. Obtén un token JWT válido accediendo al endpoint `/token`.
2. Incluye el token en el encabezado de la solicitud:
