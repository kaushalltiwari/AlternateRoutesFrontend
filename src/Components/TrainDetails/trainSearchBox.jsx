import React from 'react'

export default function TrainSearchBox() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PORTFOLIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT</a>
          </li>
        </ul>
        <button className="btn btn-primary" type="button">SIGN UP</button>
      </div>
    </div>
  </nav>
  )
}
