import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import APIServer from './APIServer';
import Person from './entities/Person';

export const apiServer = new APIServer();
export const db = new JsonDB(new Config('entityDatabase', true, true, '/')); //1m03ss

apiServer.addEntity<Person>(Person); //1m45ss, 6ms28ss

apiServer.start();
