import React, { useEffect, useRef } from 'react'
import SingleTrainDetail from './singleTrainDetail'
import { DirectTrainDetailsState, DirectAvailableTrainsState, scheduleState } from '../../store/atoms/trainSearchInfo.js'
import { useSetRecoilState, useRecoilValue } from 'recoil';

export default function DirectAvailabletrains() {
    return (
        <div>
            <FetchDirectAvailableTrains></FetchDirectAvailableTrains>
            {/* <SingleTrainDetail></SingleTrainDetail> */}
        </div>
    )
}

function FetchDirectAvailableTrains() {
    const DirectTrainDetails = useRecoilValue(DirectTrainDetailsState);
    const setDirectAvailableTrainsState = useSetRecoilState(DirectAvailableTrainsState);
    const schedule = useRecoilValue(scheduleState);
    const hasFetched = useRef(false);

    useEffect(() => {

        // if (!hasFetched.current) {
        //     hasFetched.current = true;
        let reqClass = '3A';
        let trainsInBetween = DirectTrainDetails.trainBtwnStnsList;
        let availableDirectTrains = [];
        for (let i = 0; i < trainsInBetween.length; i++) {
            let ticketAvailbale = false;
            for (let j=0; j<trainsInBetween[i].avlClasses.length; j++) {
                let tc = trainsInBetween[i].avlClasses[j];
                let url = `http://localhost:3000/perTrainDetails/${trainsInBetween[i].trainNumber}/${schedule.yearMonthDayDateFormat}/${trainsInBetween[i].fromStnCode}/${trainsInBetween[i].toStnCode}/${tc}/GN/N`
                console.log(url)
                fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        trainsInBetween[i].ticket.tc = data;
                        if (reqClass == tc) {
                            if (data.avlDayList[0].availablityStatus.includes("AVAILABLE")) {
                                ticketAvailbale = true; 
                            }
                        }
                    })
                    .catch((error) => console.error(error));
            }

            if(ticketAvailbale) {
                availableDirectTrains.push(trainsInBetween[i]);
                console.log(availableDirectTrains)
                setDirectAvailableTrainsState(availableDirectTrains)
            }
        }

        // }
    }, [DirectTrainDetails]);
}
