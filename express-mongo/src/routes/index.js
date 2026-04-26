import express from 'express';
import LivroRoutes from './LivroRoutes.js';

const router = (app) => {
    app.use(express.json());
    app.use('/', LivroRoutes);
}

export default router;