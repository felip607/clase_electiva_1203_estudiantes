import express from 'express'
import { getAll,getById } from './../controllers/controlMaestro.mjs';
import { save } from './../controllers/controlMaestro.mjs';
import { create } from './../controllers/controlMaestro.mjs';

const routes = express.Router()

routes.get('/', getAll)
routes.get('/:id', getById)
routes.post('/', save)
routes.put('/:id', create) 

export default routes;