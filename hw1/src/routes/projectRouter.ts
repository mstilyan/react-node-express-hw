import express from 'express';
import projectController from '../controllers/projectController';

const projectRouter = express.Router();

projectRouter.get('/', projectController.getAll);
projectRouter.post('/', projectController.create);
projectRouter.get('/:id', projectController.getById);
projectRouter.put('/:id', projectController.update);
projectRouter.delete('/:id', projectController.delete);

export default projectRouter;
