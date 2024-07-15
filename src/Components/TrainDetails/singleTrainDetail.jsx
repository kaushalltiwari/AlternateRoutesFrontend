import React, { useEffect } from 'react'
import './css/singleTrainDetail.css'
import TicketDetailscard from './ticketDetailscard';

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

    // const addDuration = (time, duration) => {
    //     // Split the time and duration into hours and minutes
    //     let [hours, minutes] = time.split(':').map(Number);
    //     let [durationHours, durationMinutes] = duration.split(':').map(Number);
    
    //     // Add the duration to the time
    //     hours += durationHours;
    //     minutes += durationMinutes;
    
    //     // Handle overflow of minutes
    //     if (minutes >= 60) {
    //         hours += Math.floor(minutes / 60);
    //         minutes = minutes % 60;
    //     }
    
    //     // Handle overflow of hours
    //     if (hours >= 24) {
    //         hours = hours % 24;
    //     }
    
    //     // Convert to 12-hour format with AM/PM
    //     const period = hours >= 12 ? 'PM' : 'AM';
    //     hours = hours % 12 || 12; // Convert '0' to '12' for midnight
    
    //     // Format the minutes to always be two digits
    //     minutes = minutes.toString().padStart(2, '0');
    
    //     // Return the formatted time
    //     return `${hours}:${minutes} ${period}`;
    // }

    const addDurationToArrivalTime = (givenDate,arrivalTime, duration) => {
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
    

    useEffect(() => {
       
    },[]);

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
                            <p className="col-md-2 firstRowCommon fw-bold"> {addDurationToArrivalTime(prop.date,prop.trainDetails.arrivalTime,prop.trainDetails.duration)}</p>
                    </div>
                    <div className="row" id="secondRow">
                        <p className="col-md-4">#12951 | Departs on : S M T W T F S</p>
                        <p className="col-md-3">Mumbai Central (MMCT)</p>
                        <a href="#" className="col-md-2" id="viewRoutes">View Route</a>
                        <p className="col-md-3" id="singleTrainDetailDuration">New Delhi (NDLS)</p>
                    </div>
                    <div className="row d-flex flex-row flex-nowrap scroll-container">
                        <TicketDetailscard></TicketDetailscard>
                    </div>
                </div>
            </div>
        </div>
    )
}
