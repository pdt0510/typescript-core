import { MeetingResource } from './models/meetingResource';
import { ConferenceRoom, conferenceRoomData } from './models/conferenceRoom';
import { partyTentData, PartyTent } from './models/partyTent';
import { Building, buildingData } from './models/building';

//main2,
function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array<T> {
	let bigRooms: Array<T> = [];

	rooms.forEach((r) => {
		if (r.capacity > minSize) {
			bigRooms.push(r);
		}
	});

	return bigRooms;
}

let getLargeRooms: <T extends MeetingResource>(rooms: Array<T>, minSize: number) => Array<T>; //1m13ss

getLargeRooms = getBigRooms; // 1m43ss

let largeRooms = getLargeRooms(conferenceRoomData, 30); //1m51ss
console.log('largeRooms ---', largeRooms);

let partyRooms = getLargeRooms(partyTentData, 50); //1m51ss
console.log('partyRooms ---', partyRooms);

// 2ms34ss
function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
	return data.splice(amountToShorten, data.length);
}

//different names but is the same signature
let shrinkArray: <U>(original: Array<U>, units: number) => Array<U>;

shrinkArray = shortenArray;
