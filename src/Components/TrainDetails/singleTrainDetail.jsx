import React, { useEffect, useState } from 'react'
import './css/singleTrainDetail.css'
import TicketDetailscard from './ticketDetailscard';
import { PerTrainDetailsState, scheduleState } from '../../store/atoms/trainSearchInfo.js'
import { useSetRecoilState, useRecoilValue } from 'recoil';

export default function SingleTrainDetail(prop) {

    const getDayName = (date) => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[date.getDay()];
    }

    const convertTo12Hour = (time) => {
        // Split the time into hours and minutes
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);

        // Determine AM or PM
        const period = hours >= 12 ? 'PM' : 'AM';

        // Convert hours from 24-hour to 12-hour format
        hours = hours % 12 || 12; // Convert '0' to '12' for midnight

        // Return the formatted time
        return `${hours}:${minutes} ${period}`;
    }

    const addDurationToArrivalTime = (givenDate, arrivalTime, duration) => {
        // Split the arrival time and duration into hours and minutes
        let [arrivalHours, arrivalMinutes] = arrivalTime.split(':').map(Number);
        let [durationHours, durationMinutes] = duration.split(':').map(Number);

        // Create a new Date object with the arrival time
        let date = new Date(givenDate);
        date.setHours(arrivalHours);
        date.setMinutes(arrivalMinutes);

        // Add the duration to the arrival time
        date.setHours(date.getHours() + durationHours);
        date.setMinutes(date.getMinutes() + durationMinutes);

        // Get the day of the week
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = days[date.getDay()];

        // Convert to 12-hour format with AM/PM
        let hours = date.getHours();
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert '0' to '12' for midnight
        const minutes = date.getMinutes().toString().padStart(2, '0');

        // Return the formatted day and time
        return `${hours}:${minutes} ${period}, ${dayName}`;
    }

    const convertDuration = (duration) => {
        // Split the duration into hours and minutes
        let [hours, minutes] = duration.split(':').map(Number);

        // Return the formatted duration
        return `${hours} hrs ${minutes} mins`;
    }

    const updateTrainTickets = (ticketWithClass) => {
        let ticketArray = perClassTicket
        ticketArray.push(ticketWithClass)
        setMessage(ticketArray);
    };

    const [perClassTicket, setPerClassTicket] = useState([]);

    const [daySchedule, setDaySchedule] = useState([prop.trainDetails.runningSun,prop.trainDetails.runningMon,prop.trainDetails.runningTue,prop.trainDetails.runningWed,prop.trainDetails.runningThu,prop.trainDetails.runningFri,prop.trainDetails.runningSat])

    useEffect(() => {

    }, []);

    return (
        <div className="container" id="singleTrainDetailMainContainer">
            <div className="card  rounded" >
                <div className="card-body">
                    <div className="row" id="firstRow">
                        <p className="col-md-4 fs-4 fw-bold">{prop.trainDetails.trainName}</p>
                        <p className="col-md-2 firstRowCommon fw-bold">{convertTo12Hour(prop.trainDetails.arrivalTime)} {getDayName(prop.date)}</p>
                        <hr className="col-md-1 line" id="lineLeft" />
                        <p className="col-md-2 text-center firstRowCommon">{convertDuration(prop.trainDetails.duration)}</p>
                        <hr className="col-md-1 line" id="lineRight" />
                        <p className="col-md-2 firstRowCommon fw-bold"> {addDurationToArrivalTime(prop.date, prop.trainDetails.arrivalTime, prop.trainDetails.duration)}</p>
                    </div>
                    <div className="row" id="secondRow">
                        <p className="col-md-4">#{prop.trainDetails.trainNumber} | Departs on : <Schedule schedule={daySchedule} /></p>
                        <p className="col-md-3">Mumbai Central (MMCT)</p>
                        <a href="#" className="col-md-2" id="viewRoutes">View Route</a>
                        <p className="col-md-3" id="singleTrainDetailDuration">New Delhi (NDLS)</p>
                    </div>
                    <p className="col-md-4 fw-bolder">Available Classes</p>
                    <div className="row d-flex flex-row flex-nowrap scroll-container">
                        {/* <FetchPertrainDetails trainDetails={prop.trainDetails} updateTicket={updateTrainTickets}></FetchPertrainDetails> */}
                        {prop.trainDetails.avlClasses.map((item) => (
                            <TicketDetailscard key= {prop.trainDetails.trainNumber} cl={item}></TicketDetailscard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


const Schedule = ({ schedule }) => {
    const renderDay = (day, status) => {
      return (
        <span key={day} style={{ color: status === 'N' ? 'red' : 'green' }}>
          {getDayAbbreviation(day[0])}{' '}
        </span>
      );
    };

    const getDayAbbreviation = (dayNumber) => {
        const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        return days[dayNumber] || '';
      }
  
    return (
      <span>
        {Object.entries(schedule).map(([day, status]) => renderDay(day, status))}
      </span>
    );
  };

function FetchPertrainDetails(prop) {

    const schedule = useRecoilValue(scheduleState);

    useEffect(() => {

        const fetchTrainDetails = async () => {
            for (let j = 0; j < prop.trainDetails.avlClasses.length; j++) {
                let clss = prop.trainDetails.avlClasses[j];
                let url = `http://localhost:3000/perTrainDetails/${prop.trainDetails.trainNumber}/${schedule.yearMonthDayDateFormat}/${prop.trainDetails.fromStnCode}/${prop.trainDetails.toStnCode}/${clss}/GN/N`;
                console.log(url);

                fetch(url, {
                    method: 'GET',
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data)
                        // updateTicket(Json.stringify(data))
                    })
                    .catch((error) => console.error(error));
            }
        }

        // if (!hasFetched.current) {
        //     hasFetched.current = true;

        // }

        fetchTrainDetails();
    }, [schedule]);

}
