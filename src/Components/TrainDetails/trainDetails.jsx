import React, { useEffect, useState } from 'react'
import SingleTrainDetail from './singleTrainDetail.jsx'
import TrainDetailSideBar from './trainDetailSideBar.jsx'
import TrainSearchBox from './trainSearchBox.jsx'
import Header from '../../header.jsx'
import { FromStationState, ToStationState, scheduleState, DirectTrainDetailsState } from '../../store/atoms/trainSearchInfo.js'
import { useSetRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import { json } from 'react-router-dom'

export default function TrainDetails() {

    const DirectTrainDetails = useRecoilValue(DirectTrainDetailsState);
    const schedule = useRecoilValue(scheduleState);

    return (
        
        <div>
            {/* <TrainSearchBox></TrainSearchBox> */}
            <FetchTrainDetails></FetchTrainDetails>
            <Header></Header>
            <div className='container row'>
                <div className="col-md-4">
                    <TrainDetailSideBar></TrainDetailSideBar>
                </div>
                <div className="col-md-8">
                    {DirectTrainDetails.trainBtwnStnsList.map((item) => (
                        <SingleTrainDetail key={item.trainNumber} trainDetails={item} date={schedule.date}/>
                    ))}
                </div>
            </div>
        </div>

    )
}

function FetchTrainDetails() {
    const setDirectTrainDetails = useSetRecoilState(DirectTrainDetailsState);
    const schedule = useRecoilValue(scheduleState);
    const FromStation = useRecoilValue(FromStationState);
    const ToStation = useRecoilValue(ToStationState);

    const params = {
        source: FromStation.stationCode,
        destination: ToStation.stationCode,
        date: schedule.yearMonthDayDateFormat
    }

    useEffect(() => {
        fetch('http://localhost:3000/getAllDirectTrains', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setDirectTrainDetails(data)
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <></>
    )
}


