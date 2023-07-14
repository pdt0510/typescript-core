import { Request, Response } from 'express';

export function logRoute(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	const original = descriptor.value;

	descriptor.value = function (...args: any[]) {
		let req = args[0] as Request;
		let res = args[1] as Response;
		original.apply(this, args);

		if (req != undefined && res != undefined) {
			console.log(
				`Request info ---\nip: ${req.ip}; \nToday: [${new Date().toISOString()}]; \nhostname: ${
					req.hostname
				}; \noriginalUrl:  ${req.originalUrl}; \nmethod: ${req.method}; \nstatusCode: ${
					res.statusCode
				}; \nstatusMessage:  ${res.statusMessage}; \nHTTP/: ${req.httpVersion}`,
			);

			if (['PUT', 'POST'].indexOf(req.method) > -1) {
				console.log(`\nPut/Post BODY: ${JSON.stringify(req.body)}`);
			}
		}
	};
}
