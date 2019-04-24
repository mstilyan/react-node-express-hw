import express from 'express';
import { IProject } from '../db/ProjectCollection';
import db from '../db';

export default {
	getAll: (req: express.Request, res: express.Response) => {
		db.ProjectCollection.find((err, list) => {
			if (err) {
				res.send([]);
			} else {
				res.send(list);
			}
		})
	},

	create: (req: express.Request, res: express.Response) => {
		var project = req.body as IProject;
		db.ProjectCollection.create(project)
			.then(pj => {
				res.send(pj);
			});
	},

	update: (req: express.Request, res: express.Response) => {
		var id = req.params.id;
		var pj = req.body as IProject;
		db.ProjectCollection.findByIdAndUpdate(id, pj, { new: true }, (err, result) => {
			if (!err) {
				return res.send(result);
			} else if (err.n === 0) {
				return res.sendStatus(404);
			}
			return res.status(400).send(err);
		});
	},

	getById: (req: express.Request, res: express.Response) => {
		var id = req.params.id;
		db.ProjectCollection.findById(id)
			.then(pj => {
				res.send(pj);
			})
			.catch(() => {
				res.sendStatus(404);
			})
	},

	delete: (req: express.Request, res: express.Response) => {
		var id = req.params.id;
		db.ProjectCollection.findByIdAndRemove(id, (err, result) => {
			if (err) {
				return res.status(400).send(err);
			} else if (!result) {
				return res.sendStatus(404);
			}

			return res.sendStatus(204);
		});
	}
}