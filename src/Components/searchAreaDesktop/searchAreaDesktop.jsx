import React, { useState,useEffect }  from 'react'
import './searchAreaDesktop.css'
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import './FlatpickrCustom.css'
import $ from 'jquery';

export default function searchAreaDesktop() {

  const handleDateChange = (year) => {
        return year < 1000 ? year + 1900 : year
  };  
  
  const [schedule, setSchedule] = useState(new Date());
  const [year, setYear] = useState(handleDateChange(schedule.getYear()));

  useEffect(() => {
        
    const handleClickOutside = (event) => {
        if (!$(event.target).closest('.flatpickr-calendar, #Test').length) {
          $('.flatpickr-calendar').removeClass('open');
        }
    };
        // Initialize jQuery plugin
    $('#Test').click(() => {
           var position = $('#Test').offset();
           $('.flatpickr-calendar').addClass('arrowTop arrowLeft open')
           $(".flatpickr-calendar").css({
                top: position.top + 120,
                left: position.left,
                display: 'block'
           });
    });

        // Add event listener to the document
    $(document).on('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      $(document).off('click', handleClickOutside);
    };

}, []);

  return (
    <div className="container mt-5">
          <div className="card mb-3">
              <div className="card-body">
                  This is some text within a card body.
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
                                              <p className="middleText fs-2 fw-semibold">Delhi</p>
                                              <p className="dayText">New Delhi Railway Station</p>
                                          </div>
                                          <ul className="dropdown-menu w-100 drp">
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
                                              <p className="middleText fs-2 fw-semibold">Delhi</p>
                                              <p className="dayText">New Delhi Railway Station</p>
                                          </div>
                                          <ul className="dropdown-menu w-100 drp">
                                              <li><a className="dropdown-item" href="#">Delhi</a></li>
                                              <li><a className="dropdown-item" href="#">Mumbai</a></li>
                                              <li><a className="dropdown-item" href="#">Kolkata</a></li>
                                              <li><a className="dropdown-item" href="#">Asansol</a></li>
                                              <li><a className="dropdown-item" href="#">Dhanbad</a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-2 border-end queryInfo" id ="Test">
                                      <div className="d-flex flex-column">
                                         <p className="travelDate">Trave Date</p>
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
                                      <div className="d-flex flex-column">
                                          <p className="topText">From</p>
                                          <h3 className="middleText">Delhi</h3>
                                          <p>New Delhi</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
  )
}
