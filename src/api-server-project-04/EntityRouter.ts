import { db } from './app';
import * as uuid from 'uuid';
import express, { Router, Request, Response } from 'express';
import BaseEntity, { EntityTypeInstance, EntityFactory } from './entities/BaseEntity';
import { logRoute, validate } from './decorators';

export default class EntityRouter<T extends BaseEntity> {
	private _router: Router;

	get router(): Router {
		return this._router;
	}

	constructor(public name: string, private classRef: EntityTypeInstance<T>) {
		this._router = express.Router();
		this.addEntityRoutes();
	}

	@logRoute
	addEntityRoutes() {
		this._router.post('/', (req, res) => {
			this.createEntity(req, res);
		});

		this._router.get('/', (req, res) => {
			this.fetchAllEntities(req, res);
		});

		this._router.get('/:id', (req, res) => {
			this.fetchEntity(req, res);
		});

		this._router.patch('/:id', (req, res) => {
			this.updateEntity(req, res);
		});

		this._router.delete('/:id', (req, res) => {
			this.deleteEntity(req, res);
		});
	}

	@logRoute
	private fetchAllEntities(req: Request, res: Response) {
		let data = {};
		data = db.getData(`/${this.name}`);
		res.json(data);
	}

	@logRoute
	private fetchEntity(req: Request, res: Response) {
		let data = {};
		data = db.getData(`/${this.name}/${req.params.id}`);
		res.json(data);
	}

	@logRoute
	private createEntity(req: Request, res: Response) {
		//using validation
		let newEntity = EntityFactory.fromPersistenceObject<T>(req.body, this.classRef);

		let errorMap = validate(newEntity); //	6ms34ss
		if (Object.keys(errorMap).length > 0) {
			const output = { errors: errorMap };
			res.status(400).json(output);
			return;
		}

		const idProperty = Reflect.getMetadata('entity:id', newEntity);
		newEntity[idProperty] = uuid.v4();
		db.push(`/${this.name}/${newEntity[idProperty]}`, newEntity.getPersistenceObject());
		res.status(200).json(newEntity);

		/* no validation */
		// let newEntity = EntityFactory.fromPersistenceObject<T>(req.body, this.classRef);
		// const idProperty = Reflect.getMetadata('entityTai:id', newEntity); //xx10, xx12
		// newEntity[idProperty] = uuid.v4();
		// db.push(`/${this.name}/${newEntity[idProperty]}`, newEntity.getPersistenceObject());
		// res.status(200).json(newEntity);
	}

	@logRoute
	private updateEntity(req: Request, res: Response) {
		// Does entity exist with ID
		let data = {};
		try {
			data = db.getData(`/${this.name}/${req.params.id}`);
		} catch (err) {
			res.status(404).json({ error: 'Object does not exist' });
			return;
		}

		// Update Object with new values
		let updatedData = req.body;
		let updatedObj = EntityFactory.fromPersistenceObject(data, this.classRef);
		const propKeys = Object.keys(updatedData);
		for (const propKey of propKeys) {
			updatedObj[propKey] = updatedData[propKey];
		}

		// Validate, 7ms32ss
		let errorMap = validate(updatedObj);
		if (Object.keys(errorMap).length > 0) {
			const output = { errors: errorMap };
			res.status(400).json(output);
			return;
		}

		// Save and Return data
		db.push(`/${this.name}/${req.params.id}`, updatedData, false);
		data = db.getData(`/${this.name}/${req.params.id}`);
		res.json(data);
	}

	@logRoute
	private deleteEntity(req: Request, res: Response) {
		db.delete(`/${this.name}/${req.params.id}`);
		res.json({});
	}
}
