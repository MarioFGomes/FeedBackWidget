import express from 'express';
import {routes} from './routes'

export const app =express();

app.use(express.json());

app.use(routes);

app.listen(3333,() => {
    console.log('HTTP Server running na porta 3333')
})