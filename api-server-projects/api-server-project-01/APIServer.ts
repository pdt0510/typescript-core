import * as http from 'http';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import EntityRouter from './EntityRouter';
import BaseEntity from './entities/BaseEntity';

export default class APIServer {
	private _app: Express;

	get app(): Express {
		return this._app;
	}

	private _server: http.Server;

	get server(): http.Server {
		return this._server;
	}

	constructor() {
		//Creates an Express application. The express() fn is a top-level function exported by the express module
		this._app = express();

		// Set port
		this._app.set('port', process.env.PORT || 3000);

		// Add Middleware
		this.configureMiddleware();
	}

	public configureMiddleware() {
		// Setup body parsing - required for POST requests
		this._app.use(bodyParser.json());
		this._app.use(bodyParser.urlencoded({ extended: true }));

		// Setup CORS
		this.app.use(function (req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Credentials', 'true');
			res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
			res.setHeader(
				'Access-Control-Allow-Headers',
				'Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization',
			);
			next();
		});
	}

	// 3ms23ss
	public addEntity<T extends BaseEntity>(clazz) {
		// TODO - Implement
	}

	public start() {
		// Start the server instance
		this._server = this._app.listen(this._app.get('port'), () => {
			console.log('Server is running on port ' + this._app.get('port'));
		});
	}
}
