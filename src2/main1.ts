import { MeetingResource } from './models/meetingResource';
import { ConferenceRoom, conferenceRoomData } from './models/conferenceRoom';
import { partyTentData, PartyTent } from './models/partyTent';
import { Building, buildingData } from './models/building';

//main1, 3ms40ss
function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array<T> {
	let bigRooms: Array<T> = [];

	rooms.forEach((r) => {
		if (r.capacity > minSize) {
			bigRooms.push(r);
		}
	});

	return bigRooms;
}

let bigRooms: Array<ConferenceRoom> = getBigRooms<ConferenceRoom>(conferenceRoomData, 2);

console.log('bigRooms ---', bigRooms);

// 5ms23ss
let bigRooms2: Array<PartyTent> = getBigRooms<PartyTent>(partyTentData, 100);
console.log('bigRooms2 ---', bigRooms2);

//5ms41ss
// let bigRooms3: Array<Building> = getBigRooms<Building>(buildingData, 100);

// 1m59ss
// function getBigRooms1<T>(rooms: Array<T>, minSize: number): Array<T> {
// 	let bigRooms: Array<T> = [];

// 	rooms.forEach((r) => {
// 		// 3ms04ss
// 		if (r.capacity > minSize) {
// 			bigRooms.push(r);
// 		}
// 	});

// 	return bigRooms;
// }
