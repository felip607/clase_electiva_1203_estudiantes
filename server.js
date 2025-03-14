import express from 'express';
import 'dotenv'
import routeMaestro from './routes/maestro.mjs';


const app = new express();

//use

app.use(express.json());

// setters
app.set('PORT', process.env.PORT || 4500);

// middleware

app.use('/maestro', routeMaestro);

app.listen(app.get('PORT'), () =>console.log(`Server running on port ${app.get('PORT')}`));