import { atom } from 'recoil';

export const FromStationState = atom({
  key: 'FromStation', // unique ID (with respect to other atoms/selectors)
  default:  { city: "Delhi", stationName: "New Delhi Railway Station" ,stationCode : "NLDS"}, // default value (aka initial value)
});

export const ToStationState = atom({
  key: 'ToStation',
  default: { city: "Howrah", stationName: "Howrah", stationCode :  "HWH"},
});

export const listedStationsState = atom({
    key: 'listedStations', // unique ID (with respect to other atoms/selectors)
    default: [
      { id: '1', StationName: 'New Delhi JN', StationCode: 'NLDS', cityName: 'Delhi' },
      { id: '2', StationName: 'Howrah JN', StationCode: 'HWH', cityName: 'Kolkata' },
      { id: '3', StationName: 'Burnpur', StationCode: 'BURN', cityName: 'Asansol' }
    ], // default value (aka initial value)
});

export const scheduleState = atom({
    key: 'schedule',
    default: { 
        date: new Date(),
        yearMonthDayDateFormat : '',
        year : ''
    },
});

