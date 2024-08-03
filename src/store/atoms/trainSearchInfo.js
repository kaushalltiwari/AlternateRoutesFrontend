import { atom } from 'recoil';

export const FromStationState = atom({
  key: 'FromStation', // unique ID (with respect to other atoms/selectors)
  default:  { city: "New Delhi", stationName: "New Delhi Railway Station" ,stationCode : "NDLS"}, // default value (aka initial value)
});

export const ToStationState = atom({
  key: 'ToStation',
  default: { city: "Howrah", stationName: "Howrah Railway Station", stationCode :  "HWH"},
});

export const listedStationsState = atom({
    key: 'listedStations', // unique ID (with respect to other atoms/selectors)
    default: [
      { id: '1', StationName: 'New Delhi Railway Station', StationCode: 'NDLS', cityName: 'New Delhi' },
      { id: '2', StationName: 'Howrah Railway Station', StationCode: 'HWH', cityName: 'Howrah' },
    ], // default value (aka initial value)
});

export const scheduleState = atom({
    key: 'schedule',
    default: { 
        date: new Date(),
        yearMonthDayDateFormat : '20240728',
        year : ''
    },
});

export const DirectTrainDetailsState = atom({
    key: 'DirectTrainDetails',
    default: { 
       trainBtwnStnsList : []   
    },
});

export const DirectAvailableTrainsState = atom({
  key: 'DirectAvailableTrains',
  default: { 
     availableTrains : []  
  },
});

export const PerTrainDetailsState = atom({
  key: 'PerTrainDetails',
  default: { 
     availableInAllClass : []  
  },
});