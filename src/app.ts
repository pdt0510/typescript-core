import APIServer from './APIServer';
import { Request, Response } from 'express';

const server = new APIServer(); // 2ms14ss

// 2ms40ss
class APIRoutes {
	@logRoute('decorator factory test 1') //5ms13ss, 5ms13ss_xx3
	@route('get', '/') //2ms58ss
	public indexRoute(req: Request, res: Response) {
		return { Hello: 'Hello World' };
	}

	@logRoute('decorator factory test 2') //5ms13ss_xx3
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
	console.log('method, path ---', method, path);
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		console.log('descriptor.value ---', descriptor.value);
		server.app[method](path, (req: Request, res: Response) => {
			res.status(200).json(descriptor.value(req, res)); //3ms40ss, xx5
		});

		//traditional way, xx5
		// server.app.get(path, (req: Request, res: Response) => {});
	};
}

// decorator factory without param, returns a method decorator, 5ms13ss
function logRoute(parma: string): MethodDecorator {
	//5ms13ss_xx1
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const original = descriptor.value; //5ms13ss_xx2
		console.log('original ---', original);
		console.log('descriptor ---', descriptor);

		descriptor.value = function (...args: any[]) {
			console.log('args ---', args, typeof args);
			let req = args[0] as Request; //get req, 5ms13ss_xx3
			let res = args[1] as Response; //get res

			console.log(`logRoute url: ${req.url}; method: ${req.method} Called`);
			return original.apply(this, args); //5ms13ss_xx4
		};
	};
}

// 7ms01ss
function authenticate(key: string): MethodDecorator {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const original = descriptor.value;
		descriptor.value = function (...args: any[]) {
			const req = args[0] as Request;
			const res = args[1] as Response;
			const headers = req.headers; //7ms01ss
			console.log('headers.apikey ---', headers.apikey);
			if (headers.hasOwnProperty('apikey') && headers.apikey == key) {
				return original.apply(this, args);
			}
			res.status(403).json({ error: 'Not Authorized' });
		};
	};
}

server.start(); // 2ms14ss
