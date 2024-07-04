import React from 'react'
import './trainDetailSideBar.css'

export default function TrainDetailSideBar() {
  return (
    <div className="container-fluid sidebar d-flex flex-column p-3" style={{ width: '250px', height: '100vh', position: 'absolute', }} id="trainDetailSideBar">
      <h5>Quick Filters</h5>
      <form>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="ac" />
          <label className="form-check-label" htmlFor="ac">AC</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="available" />
          <label className="form-check-label" htmlFor="available">Available</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="departure" />
          <label className="form-check-label" htmlFor="departure">Departure after 6 PM</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="arrival" />
          <label className="form-check-label" htmlFor="arrival">Arrival before 12 PM</label>
        </div>
      </form>
      <h5 className="mt-4">Ticket Types</h5>
      <form>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="free-cancellation" />
          <label className="form-check-label" htmlFor="free-cancellation">Free Cancellation</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="trip-guarantee" />
          <label className="form-check-label" htmlFor="trip-guarantee">Trip Guarantee</label>
        </div>
      </form>
      <h5 className="mt-4">Journey Class Filters</h5>
      <form>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="first-class" />
          <label className="form-check-label" htmlFor="first-class">1st Class AC - 1A</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="second-class" />
          <label className="form-check-label" htmlFor="second-class">2 Tier AC - 2A</label>
        </div>
      </form>
    </div>
  )
}
