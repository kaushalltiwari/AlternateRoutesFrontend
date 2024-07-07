import React, { useState, useEffect } from 'react'
import './searchAreaDesktop.css'
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import './FlatpickrCustom.css'
import $ from 'jquery';
import trainSelected from '../../assets/icons/trainSelected.png';
import trainUnselected from '../../assets/icons/trainUnselected.png';

export default function searchAreaDesktop() {

    const handleDateChange = (year) => {
        return year < 1000 ? year + 1900 : year
    };

    const dropdownChange = (station, stationCodeAndName, sourceDestination) => {
        if (sourceDestination == "source") {
            setFromStation({ station: station, stationCodeAndName: stationCodeAndName });
        } else {
            setToStation({ station: station, stationCodeAndName: stationCodeAndName });
        }
    };


    const [schedule, setSchedule] = useState(new Date());
    const [year, setYear] = useState(handleDateChange(schedule.getYear()));
    const [FromStation, setFromStation] = useState({ station: "Delhi", stationCodeAndName: "NLDS, New Delhi Railway Station" });
    const [ToStation, setToStation] = useState({ station: "Delhi", stationCodeAndName: "NLDS, New Delhi Railway Station" });

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

        $("#changeTrainImage").click(() => {
            $("#changeTrainImage").attr("src", trainSelected)
            $('#checkTrains').addClass('highlight')
        });


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
                                                <p className="middleText fs-2 fw-semibold">{FromStation.station}</p>
                                                <p className="dayText">{FromStation.stationCodeAndName}</p>
                                            </div>
                                            <ul className="dropdown-menu w-100 drp">
                                                <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="From"/>
                                                <li><a className="dropdown-item" href="#">Delhi</a></li>
                                                <li><a className="dropdown-item" href="#">Mumbai</a></li>
                                                <li><a className="dropdown-item" href="#">Kolkata</a></li>
                                                <li><a className="dropdown-item" href="#">Asansol</a></li>
                                                <li><a className="dropdown-item" href="#">Dhanbad</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 border-end queryInfo">
                                        <div className="dropdown">
                                            <div className="d-flex flex-column" role="button" data-bs-toggle="dropdown">
                                                <p className="topText">From</p>
                                                <p className="middleText fs-2 fw-semibold">{ToStation.station}</p>
                                                <p className="dayText">{ToStation.stationCodeAndName}</p>
                                            </div>
                                            <ul className="dropdown-menu w-100 drp">
                                                <li><a className="dropdown-item" href="#" onClick={() => dropdownChange('Delhi', 'NLDS, New Delhi Railway Station', 'destination')}>Delhi</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => dropdownChange('Mumbai', 'CSTM, Mumbai - All Stations', 'destination')}>Mumbai</a></li>
                                                <li><a className="dropdown-item" href="#">Kolkata</a></li>
                                                <li><a className="dropdown-item" href="#">Asansol</a></li>
                                                <li><a className="dropdown-item" href="#">Dhanbad</a></li>
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
                                                    setYear(handleDateChange(schedule.getYear()));
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
            <button type="button" class="btn btn-primary" id="searchBtn">Search</button>
        </div>
    )
}
