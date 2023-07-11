import APIServer from './APIServer';
import { Request, Response } from 'express';

const server = new APIServer(); // 2ms14ss

// 2ms40ss
class APIRoutes {
	@logRoute() //5ms13ss
	@route('get', '/') //2ms58ss
	public indexRoute(req: Request, res: Response) {
		return { Hello: 'World 444' };
	}

	@logRoute()
	@route('get', '/people') //6ms19ss
	@authenticate('123456') //7ms01ss
	public peopleRoute(req: Request, res: Response) {
		return {
			people: [
				{
					firstName: 'David',
					lastName: 'Tucker',
				},
				{
					'firstName:': 'Sammy',
					lastName: 'Davis',
				},
			],
		};
	}
}

// 2ms58ss
function route(method: string, path: string): MethodDecorator {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		server.app[method](path, (req: Request, res: Response) => {
			res.status(200).json(descriptor.value(req, res)); //3ms40ss, xx5
		});

		//traditional way, xx5
		// server.app.get(path, (req: Request, res: Response) => {});
	};
}

// 5ms13ss
function logRoute(): MethodDecorator {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const original = descriptor.value;
		descriptor.value = function (...args: any[]) {
			let req = args[0] as Request;
			console.log(`${req.url} ${req.method} Called`);
			return original.apply(this, args);
		};
	};
}

// 7ms01ss
function authenticate(key: string): MethodDecorator {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const original = descriptor.value;
		descriptor.value = function (...args: any[]) {
			const req = args[0] as Request; //7ms53ss
			const res = args[1] as Response;
			const headers = req.headers;
			console.log('headers.apikey ---', headers.apikey);
			if (headers.hasOwnProperty('apikey') && headers.apikey == key) {
				return original.apply(this, args);
			}
			res.status(403).json({ error: 'Not Authorized' });
		};
	};
}

server.start(); // 2ms14ss
