import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ maessage: 'Your app is started!' }));

export default routes;
