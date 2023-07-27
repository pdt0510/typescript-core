import { Request, Response } from 'express';

// 38ss
export function logRoute(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	const original = descriptor.value;

	descriptor.value = function (...args: any[]) {
		let req = args[0] as Request;
		let res = args[1] as Response;
		console.log('args ---', args); //xx12
		original.apply(this, args); //1m28ss

		// xx1
		console.log(
			`Request info ---\nip: ${req.ip}; \nToday: [${new Date().toISOString()}]; \nhostname: ${
				req.hostname
			}; \noriginalUrl:  ${req.originalUrl}; \nmethod: ${req.method}; \nstatusCode: ${
				res.statusCode
			}; \nstatusMessage:  ${res.statusMessage}; \nHTTP/: ${req.httpVersion}`,
		);

		if (['PUT', 'POST'].indexOf(req.method) > -1) {
			console.log(`\nPut/Post BODY data ---: ${JSON.stringify(req.body)}`);
		}

		// if (req != undefined && res != undefined) { console.log(`Request info --- ...`} // xx7
	};
}
