"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conferenceRoom_1 = require("./models/conferenceRoom");
var partyTent_1 = require("./models/partyTent");
//main2,
function getBigRooms(rooms, minSize) {
    var bigRooms = [];
    rooms.forEach(function (r) {
        if (r.capacity > minSize) {
            bigRooms.push(r);
        }
    });
    return bigRooms;
}
var getLargeRooms; //1m13ss
getLargeRooms = getBigRooms; // 1m43ss
var largeRooms = getLargeRooms(conferenceRoom_1.conferenceRoomData, 30); //1m51ss
console.log('largeRooms ---', largeRooms);
var partyRooms = getLargeRooms(partyTent_1.partyTentData, 50); //1m51ss
console.log('partyRooms ---', partyRooms);
// 2ms34ss
function shortenArray(data, amountToShorten) {
    return data.splice(amountToShorten, data.length);
}
//different names but is the same signature
var shrinkArray;
shrinkArray = shortenArray;
