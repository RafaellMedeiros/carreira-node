import express from 'express';
import taskRoutes from './taskRoutes.js';

const routes = (app) => {
    app.use(express.json(), taskRoutes);
}

export default routes;