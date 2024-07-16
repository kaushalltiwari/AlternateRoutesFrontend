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

        const fetchTrainDetails = async () => {
            const abortController = new AbortController();
            const signal = abortController.signal;

            let reqClass = '3A';
            let trainsInBetween = DirectTrainDetails.trainBtwnStnsList;
            let availableDirectTrains = [];
    
            for (let i = 0; i < trainsInBetween.length; i++) {
                let ticketAvailbale = false;
                console.log(trainsInBetween[i]);
                const trainCopy = { ...trainsInBetween[i] };
                trainCopy.ticket = {};
    
                for (let j = 0; j < trainsInBetween[i].avlClasses.length; j++) {
                    let tc = trainsInBetween[i].avlClasses[j];
                    let url = `http://localhost:3000/perTrainDetails/${trainsInBetween[i].trainNumber}/${schedule.yearMonthDayDateFormat}/${trainsInBetween[i].fromStnCode}/${trainsInBetween[i].toStnCode}/${tc}/GN/N`;
    
                    try {
                        const response = await fetch(url);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = await response.json();
                        trainCopy.ticket[tc] = data;
                        console.log(data);
    
                        if (reqClass === tc && data.avlDayList[0].availablityStatus.includes("AVAILABLE")) {
                            console.log("Ticket Available");
                            ticketAvailbale = true;
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
    
                if (ticketAvailbale) {
                    availableDirectTrains.push(trainCopy);
                    setDirectAvailableTrainsState(availableDirectTrains);
                }
            }
        };
    
        fetchTrainDetails();

        // return () => {
        //     abortController.abort();
        // };

    }, [DirectTrainDetails]);
}
