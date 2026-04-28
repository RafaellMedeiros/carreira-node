import express from 'express';
import TaskController from '../controllers/taskController.js';

const routes = express.Router();

routes.get('/tasks', TaskController.getAllTasks);
routes.post('/task', TaskController.createTask);

export default routes;