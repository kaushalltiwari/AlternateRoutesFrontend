import React from 'react' 
import SingleTrainDetail from './singleTrainDetail.jsx'
import TrainDetailSideBar from './trainDetailSideBar.jsx'

export default function TrainDetails() {
  return (
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
  )
}
