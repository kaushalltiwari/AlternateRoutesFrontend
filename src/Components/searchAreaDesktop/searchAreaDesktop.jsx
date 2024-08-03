import React, { useState, useEffect } from 'react'
import './searchAreaDesktop.css'
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import './FlatpickrCustom.css'
import $ from 'jquery';
import trainSelected from '../../assets/icons/trainSelected.png';
import trainUnselected from '../../assets/icons/trainUnselected.png';
import search from '../../assets/icons/search.png'
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {FromStationState, ToStationState, listedStationsState, scheduleState} from '../../store/atoms/trainSearchInfo.js'
import MainPic from '../../assets/Images/MainPic.jpg' 

export default function searchAreaDesktop() {
    const navigate = useNavigate();

    const searchTrains = () => {
        navigate('/listing'); 
    }

    const handleYear = (year) => {
        return year < 1000 ? year + 1900 : year
    };

    const handlMonth = (month) => {
        return  month+1 < 10 ? '0'+(month+1) : month+1 
    };
    
    function removeJn(stationName) {
        return stationName.replace(' Jn', '').replace(' Railway Station','');
    }
    
    
    const dropdownChange = (station, stationName, stationCode, sourceDestination) => {
        if (sourceDestination == "source") {
            setFromStation({ city: removeJn(stationName), stationName: `${removeJn(stationName)} Railway Station` , stationCode : stationCode });
        } else {
            setToStation({ city: removeJn(stationName), stationName: `${removeJn(stationName)} Railway Station` , stationCode : stationCode });
        }
    };

    //Used For search in dropdown
    const changeStationsAtDropDown = (event) => {
        console.log('Value is:', event.target.value);
        fetch(`http://localhost:3000/searchSation?stationName=${event.target.value}`)
            .then((response) => response.json())
            .then((data) => {
                var stationsArray = data.hits.hits;
                var extractStations = [];
                for (var i=0;i<stationsArray.length;i++) {
                    extractStations[i] =  { "id" : stationsArray[i]._id,"StationName" : `${removeJn(stationsArray[i]._source.StationName)} Railway Station`,"StationCode" : stationsArray[i]._source.StationCode,"cityName" : removeJn(stationsArray[i]._source.StationName) }
                        
                }
                setListedStations(extractStations)
            })
            .catch((error) => console.error(error));

    }
    
    const init = () => {
        setschedule({
            date : schedule.date,
            yearMonthDayDateFormat : `${handleYear(schedule.date.getYear())}${handlMonth(schedule.date.getMonth())}${schedule.date.getDate()}`,
            year : handleYear(schedule.date.getYear())
        })

    }
    
    const setschedule = useSetRecoilState(scheduleState);
    const setFromStation = useSetRecoilState(FromStationState);
    const setToStation = useSetRecoilState(ToStationState);
    const setListedStations = useSetRecoilState(listedStationsState);
    const schedule = useRecoilValue(scheduleState);
    const FromStation = useRecoilValue(FromStationState);
    const ToStation = useRecoilValue(ToStationState);
    const listedStations = useRecoilValue(listedStationsState);
    // const [schedule, setschedule] = useRecoilState(scheduleState);
    // const [FromStation, setFromStation] = useRecoilState(FromStationState);
    // const [ToStation, setToStation] = useRecoilState(ToStationState);
    // const [listedStations, setListedStations] = useRecoilState(listedStationsState);


    useEffect(() => {
       
        init();

        $('#calender').click(() => {
            var position = $('#calender').offset();
            $('.flatpickr-calendar').addClass('arrowTop arrowLeft open')
            $(".flatpickr-calendar").css({
                top: position.top + 120,
                left: position.left,
                display: 'block'
            });
            // console.log('Schedule:', schedule.yearMonthDayDateFormat);
        });

        $("#changeTrainImage").click(() => {
            $("#changeTrainImage").attr("src", trainSelected)
            $('#checkTrains').addClass('highlight')
        });
    

    }, [trainSelected]);

    return (
        <div class="container" id="parentContainer">
            <img src={MainPic} class="img-fluid" id="mainPic"></img>
        
        <div className="container" id="mainConatiner">
            {/* <div className="card shadow bg-body-tertiary rounded" id="changeQuerySelector">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div className="col col-md-6 text-center selecetedImage" id="checkTrains">
                            <img src={trainUnselected} width="30" id="changeTrainImage" alt="Train" />
                            <p>Train</p>
                        </div>
                        <div className="col col-md-6 text-center selecetedImage">
                            <img src={trainUnselected} width="30" id="" alt="Train" />
                            <p>Train</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="card mb-3" id="wholeSearchArea">
                
                <div className="card-body pt-5">
                    <div className="card">
                        <div className="card-body" id="parent_cardBody">
                            <div className="container">
                                <div className="row align-items-end">
                                    <div className="col-12 col-md-4 border-end queryInfo">
                                        <div className="dropdown">
                                            <div className="d-flex flex-column" role="button" data-bs-toggle="dropdown">
                                                <p className="topText">From</p>
                                                <p className="middleText fs-2 fw-semibold">{FromStation.city}</p>
                                                <p className="dayText">{FromStation.stationCode+','+FromStation.stationName}</p>
                                            </div>
                                            <ul className="dropdown-menu w-100 drp stations_dropdown">
                                                <div className="d-flex">
                                                    <img src={search}  className="searchImage"></img>
                                                    <input type="text" className="form-control sticky-top" id="fromStation" placeholder="From" onChange={changeStationsAtDropDown} />
                                                </div>
                                                {listedStations.map((value) => (
                                                    <li className="dropdown-item d-flex station_items" key={value.id}  onClick={() => dropdownChange(value.cityName, value.StationName, value.StationCode, 'source')}>
                                                        <p className="col-8 h-1">{value.cityName}<br/>{value.StationName}</p>
                                                        <p className="col-4 text-end">{value.StationCode}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 border-end queryInfo">
                                        <div className="dropdown">
                                            <div className="d-flex flex-column" role="button" data-bs-toggle="dropdown">
                                                <p className="topText">To</p>
                                                <p className="middleText fs-2 fw-semibold">{ToStation.city}</p>
                                                <p className="dayText">{ToStation.stationCode+','+ToStation.stationName}</p>
                                            </div>
                                            <ul className="dropdown-menu w-100 drp stations_dropdown">
                                                <div className="d-flex">
                                                    <img src={search}  className="searchImage"></img>
                                                    <input type="text" className="form-control sticky-top" id="fromStation" placeholder="From" onChange={changeStationsAtDropDown} />
                                                </div>
                                                {listedStations.map((value) => (
                                                    <li className="dropdown-item d-flex station_items" key={value.id}  onClick={() => dropdownChange(value.cityName, value.StationName, value.StationCode, 'destination')}>
                                                        <p className="col-8 h-1">{value.cityName}<br/>{value.StationName}</p>
                                                        <p className="col-4 text-end">{value.StationCode}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-2 border-end queryInfo" id="calender">
                                        <div className="d-flex flex-column">
                                            <p className="travelDate dropdown-toggle">Trave Date</p>
                                            <div className="d-lg-flex" >
                                                <p className="fs-2 fw-semibold">{schedule.date.getDate()}</p><p className="ms-1 mt-3">{schedule.date.toLocaleString('en-US', { month: 'short' }).toUpperCase()}</p>
                                                <p className="ms-1 mt-3">{schedule.year}</p>
                                            </div>

                                            <Flatpickr
                                                data-enable-time
                                                value={schedule.date}
                                                onChange={([selectedDate]) => {
                                                    setschedule({
                                                        date : selectedDate,
                                                        yearMonthDayDateFormat : handleYear(selectedDate.getYear())+''+handlMonth(selectedDate.getMonth())+''+selectedDate.getDate(),
                                                        year : handleYear(selectedDate.getYear())
                                                    });
                                                }}
                                                options={{
                                                    dateFormat: 'Y-m-d',
                                                    enableTime: false,
                                                    minDate: 'today',
                                                    maxDate: new Date().fp_incr(120)
                                                }}
                                            />
                                            <p className="dayText">Day</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-2 queryInfo">
                                        <div className="dropdown">
                                            <div className="d-flex flex-column" role="button" data-bs-toggle="dropdown">
                                                <p className="topText dropdown-toggle">Class</p>
                                                <p className="middleText fs-2 fw-semibold">All</p>
                                                <p className="dayText">All Class</p>
                                            </div>
                                            <ul className="dropdown-menu w-100 drp">
                                                <li><a className="dropdown-item" href="#">All Class</a></li>
                                                <li><a className="dropdown-item" href="#">Sleeper Class</a></li>
                                                <li><a className="dropdown-item" href="#">Third AC</a></li>
                                                <li><a className="dropdown-item" href="#">Second AC</a></li>
                                                <li><a className="dropdown-item" href="#">First AC</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary" id="searchBtn" onClick={searchTrains}>Search</button>
        </div>
        </div>
    )
}
