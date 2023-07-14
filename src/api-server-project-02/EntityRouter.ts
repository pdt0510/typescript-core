import { db } from './app';
import * as uuid from 'uuid';
import express, { Router, Request, Response } from 'express';
import BaseEntity, { EntityTypeInstance, EntityFactory } from './entities/BaseEntity';
import { entity } from './decorators/entity';

export default class EntityRouter<T extends BaseEntity> {
	private _router: Router;

	get router(): Router {
		return this._router;
	}

	// 6ms28ss
	constructor(public className: string, private classRef: EntityTypeInstance<T>) {
		console.log('nameClass ---', className);
		this._router = express.Router();
		this.addEntityRoutes();
	}

	addEntityRoutes() {
		// CREATE, xx6
		this._router.post('/', (req, res) => {
			this.createEntity(req, res);
		});

		// READ all, xx6
		this._router.get('/', (req, res) => {
			this.fetchAllEntities(req, res);
		});

		// READ one
		this._router.get('/:id', (req, res) => {
			this.fetchEntity(req, res);
		});

		// UPDATE
		this._router.put('/:id', (req, res) => {
			this.updateEntity(req, res);
		});

		// DELETE
		this._router.delete('/:id', (req, res) => {
			this.deleteEntity(req, res);
		});
	}

	private fetchAllEntities(req: Request, res: Response) {
		let data = {};
		data = db.getData(`/${this.className}`);
		res.json(data);
	}

	private fetchEntity(req: Request, res: Response) {
		let data = {};
		data = db.getData(`/${this.className}/${req.params.id}`);
		res.json(data);
	}

	// 4ms14ss
	private createEntity(req: Request, res: Response) {
		console.log('this.classRef ---', this.classRef);
		let newEntity = EntityFactory.fromPersistenceObject<T>(req.body, this.classRef);
		console.log('newEntity ---', newEntity);
		const idProperty = Reflect.getMetadata('entity:id', newEntity);
		newEntity[idProperty] = uuid.v4();
		db.push(`/${this.className}/${newEntity[idProperty]}`, newEntity.getPersistenceObject()); //POST new obj
		res.status(200).json(newEntity); //return new obj to client
	}

	// 5ms45ss
	private updateEntity(req: Request, res: Response) {
		// checking the entity exist with ID
		let data = {};
		try {
			data = db.getData(`/${this.className}/${req.params.id}`);
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

		// Save and Return data
		db.push(`/${this.className}/${req.params.id}`, updatedData, false);
		data = db.getData(`/${this.className}/${req.params.id}`);
		res.json(data);
	}

	private deleteEntity(req: Request, res: Response) {
		db.delete(`/${this.className}/${req.params.id}`);
		res.json({});
	}
}
