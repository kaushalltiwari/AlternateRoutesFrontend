import React from 'react'
import SingleTrainDetail from './singleTrainDetail.jsx'
import TrainDetailSideBar from './trainDetailSideBar.jsx'
import TrainSearchBox from './trainSearchBox.jsx'
import Header from '../../header.jsx'

export default function TrainDetails(source, destination, date) {
    return (
        <div>
            {/* <TrainSearchBox></TrainSearchBox> */}
            <Header></Header>
            <div className='container row'>
                <div class="col-md-4">
                    <TrainDetailSideBar></TrainDetailSideBar>
                </div>
                <div class="col-md-8">
                    <SingleTrainDetail></SingleTrainDetail>
                    <SingleTrainDetail></SingleTrainDetail>
                    <SingleTrainDetail></SingleTrainDetail>
                </div>
            </div>
        </div>
    )
}
