import { ConferenceRoom, conferenceRoomData } from './conferenceRoom';
import { MeetingResource } from './meetingResource';

// 2ms30ss
class Reservation<T extends MeetingResource> {
	reservationDate: Date;
	organizerName: string;
	resource: T;

	requestResource(requestedResource: T, requester: string) {
		this.resource = requestedResource;
		this.organizerName = requester;
		console.log(`${requester} requested a reservation for ${requestedResource.name}`);
	}
}

let teamMeeting = new Reservation<ConferenceRoom>();
teamMeeting.requestResource(conferenceRoomData[0], 'Gary');

/*---*/
// class Reservation<T> {
// 	reservationDate: Date;
// 	organizerName: string;
// 	resource: T;

// 	// 2ms02ss
// 	requestResource(requestedResource: T, requester: string) {
// 		this.resource = requestedResource;
// 		this.organizerName = requester;
// 		console.log(`${requester} requested a reservation for ${requestedResource.name}`);
// 	}

// 	// 1m07ss
// 	// static requestResource(requestedResource: T, requester: string) {}
// }
