import React from 'react'
import './singleTrainDetail.css'

export default function SingleTrainDetail() {
    return (
        <div className="container" id="singleTrainDetailMainContainer">
            <div className="card  rounded" >
                <div className="card-body">
                    <div className="row" id="firstRow">
                        <p className="col-md-4 fs-4 fw-bold">Ndls Tejas Raj</p>
                            <p className="col-md-2 firstRowCommon fw-bold">5:00 PM, Thu</p>
                            <hr className="col-md-1 line" id="lineLeft" />
                            <p className="col-md-2 text-center firstRowCommon">15 hrs 32 mins</p>
                            <hr className="col-md-1 line" id="lineRight" />
                            <p className="col-md-2 firstRowCommon fw-bold">8:32 AM, Fri</p>
                    </div>
                    <div className="row" id="secondRow">
                        <p className="col-md-4">#12951 | Departs on : S M T W T F S</p>
                        <p className="col-md-3">Mumbai Central (MMCT)</p>
                        <a href="#" className="col-md-2" id="viewRoutes">View Route</a>
                        <p className="col-md-3" id="singleTrainDetailDuration">New Delhi (NDLS)</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body shadow singleTrainDetailTypeRevCard">
                                    <div className="row">
                                        <p className="card-title fw-bold col-md-6">3A</p>
                                        <p className="card-text col-md-6">₹ 3085</p>
                                    </div>
                                    <div className="availableUpdateTest">
                                        <p className="card-text">AVAILABLE 173</p>
                                        <p className="card-text">Updated 3 hrs ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body shadow singleTrainDetailTypeRevCard">
                                    <div className="row">
                                        <p className="card-title fw-bold col-md-6">2A</p>
                                        <p className="card-text col-md-6">₹ 4245</p>
                                    </div>
                                    <div className="availableUpdateTest">
                                        <p className="card-text">AVAILABLE 6</p>
                                        <p className="card-text">Updated 3 hrs ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body shadow singleTrainDetailTypeRevCard">
                                    <div className="row">
                                        <p className="card-title fw-bold col-md-6">1A</p>
                                        <p className="card-text col-md-6">₹ 5275</p>
                                    </div>
                                    <div className="availableUpdateTest">
                                        <p className="card-text">GNWL 1</p>
                                        <p className="card-text">Updated 7 hrs ago</p>
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
