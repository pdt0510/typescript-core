import { MeetingResource } from './meetingResource';

// 1m04ss
export class ConferenceRoom implements MeetingResource {
	name: string;
	capacity: number;
	hasProjector: boolean;
	location: string;
}

// xx5
export const conferenceRoomData: ConferenceRoom[] = [
	{ name: 'Cheerios', capacity: 15, hasProjector: false, location: 'HQ' },
	{ name: 'Froot Loops', capacity: 25, hasProjector: true, location: 'East Campus' },
	{ name: 'Wheaties', capacity: 40, hasProjector: true, location: 'West Campus' },
	{ name: 'Chex', capacity: 10, hasProjector: false, location: 'HQ' },
];
