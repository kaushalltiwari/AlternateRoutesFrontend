import React, { useState, useEffect } from 'react'
import './searchAreaDesktop.css'
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import './FlatpickrCustom.css'
import $ from 'jquery';
import trainSelected from '../../assets/icons/trainSelected.png';
import trainUnselected from '../../assets/icons/trainUnselected.png';
import search from '../../assets/icons/search.png'

export default function searchAreaDesktop() {

    const handleYear = (year) => {
        return year < 1000 ? year + 1900 : year
    };

    const handlMonth = (month) => {
        return  month+1 < 10 ? '0'+(month+1) : month+1 
    };

    const dropdownChange = (station, stationCodeAndName, sourceDestination) => {
        if (sourceDestination == "source") {
            setFromStation({ city: station, stationCodeAndName: stationCodeAndName });
        } else {
            setToStation({ city: station, stationCodeAndName: stationCodeAndName });
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
                    extractStations[i] =  { "id" : stationsArray[i]._id,"StationName" : stationsArray[i]._source.StationName,"StationCode" : stationsArray[i]._source.StationCode,"cityName" : stationsArray[i]._source.cityName }
                        
                }
                setlistedStations(extractStations)
            })
            .catch((error) => console.error(error));

    }

    const [schedule, setSchedule] = useState(new Date());
    const [yearMonthDayDateFormat, setYearMonthDayDateFormat] = useState(schedule.getYear()+''+handlMonth(schedule.getMonth())+''+schedule.getDate())
    const [year, setYear] = useState(handleYear(schedule.getYear()));
    const [FromStation, setFromStation] = useState({ city: "Delhi", stationCodeAndName: "NLDS, New Delhi Railway Station" });
    const [ToStation, setToStation] = useState({ city: "Delhi", stationCodeAndName: "NLDS, New Delhi Railway Station" });
    const [listedStations, setlistedStations] = useState([{"id":"1","StationName" : "New Delhi JN","StationCode" : "NLDS","cityName" : "Delhi"},{"id":"2","StationName" : "Howrah JN","StationCode" : "HWH","cityName" : "Kolkata"},{"id":"3","StationName" : "Burnpur","StationCode" : "BURN","cityName" : "Asansol"}])


    useEffect(() => {

        $('#calender').click(() => {
            var position = $('#calender').offset();
            $('.flatpickr-calendar').addClass('arrowTop arrowLeft open')
            $(".flatpickr-calendar").css({
                top: position.top + 120,
                left: position.left,
                display: 'block'
            });

        });

        // $(document).on('click', (event) => {
        //     const target = $(event.target);
        //     const calendar = $('.flatpickr-calendar');
    
        //     // Check if the clicked element is outside the calendar
        //     if (!target.is('#calender') && calendar.hasClass('open')) {
        //         calendar.removeClass('open'); // Hide the calendar
        //     }
        // });

        $("#changeTrainImage").click(() => {
            $("#changeTrainImage").attr("src", trainSelected)
            $('#checkTrains').addClass('highlight')
        });
        
            // Add a click event listener to the document
    

    }, [trainSelected]);

    return (
        <div className="container" id="mainConatiner">
            <div className="card shadow bg-body-tertiary rounded" id="changeQuerySelector">
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
            </div>
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
                                                <p className="dayText">{FromStation.stationCodeAndName}</p>
                                            </div>
                                            <ul className="dropdown-menu w-100 drp stations_dropdown">
                                                <div className="d-flex">
                                                    <img src={search}  className="searchImage"></img>
                                                    <input type="text" className="form-control sticky-top" id="fromStation" placeholder="From" onChange={changeStationsAtDropDown} />
                                                </div>
                                                {listedStations.map((value) => (
                                                    <li className="dropdown-item d-flex station_items" key={value.id}  onClick={() => dropdownChange(value.cityName, value.StationCode+','+value.StationName, 'source')}>
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
                                                <p className="dayText">{ToStation.stationCodeAndName}</p>
                                            </div>
                                            <ul className="dropdown-menu w-100 drp stations_dropdown">
                                                <div className="d-flex">
                                                    <img src={search}  className="searchImage"></img>
                                                    <input type="text" className="form-control sticky-top" id="fromStation" placeholder="From" onChange={changeStationsAtDropDown} />
                                                </div>
                                                {listedStations.map((value) => (
                                                    <li className="dropdown-item d-flex station_items" key={value.id}  onClick={() => dropdownChange(value.cityName, value.StationCode+','+value.StationName, 'destination')}>
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
                                                <p className="fs-2 fw-semibold">{schedule.getDate()}</p><p className="ms-1 mt-3">{schedule.toLocaleString('en-US', { month: 'short' }).toUpperCase()}</p>
                                                <p className="ms-1 mt-3">{year}</p>
                                            </div>

                                            <Flatpickr
                                                data-enable-time
                                                value={schedule}
                                                onChange={([selectedDate]) => {
                                                    setSchedule(selectedDate);
                                                    setYear(handleYear(selectedDate.getYear()));
                                                    setYearMonthDayDateFormat(selectedDate.getYear()+''+handlMonth(selectedDate.getMonth())+''+selectedDate.getDate())
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
            <button type="button" className="btn btn-primary" id="searchBtn">Search</button>
        </div>
    )
}
