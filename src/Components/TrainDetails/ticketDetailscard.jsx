import React from 'react'

export default function TicketDetailscard(prop) {
    return (
        // <div className="col-md-3">
        //     <div className="card">
        //         <div className="card-body shadow singleTrainDetailTypeRevCard">
        //             <div className="row">
        //                 <p className="card-title fw-bold col-md-6">3A</p>
        //                 {/* <p className="card-text col-md-6">₹ 3085</p> */}
        //             </div>
        //             {/* <div className="availableUpdateTest">
        //                 <p className="card-text">AVAILABLE 173</p>
        //                 <p className="card-text">Updated 3 hrs ago</p>
        //             </div> */}
        //         </div>
        //     </div>
        // </div>
        <div className="col-md-2">
            <div className="card">
                <div className="card-body shadow singleTrainDetailTypeRevCard">
                        <p className="card-title fw-bold text-center">{prop.cl}</p>
                </div>
            </div>
        </div>
        
        
    )
}
