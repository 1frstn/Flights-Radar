import { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';




export default function FlightDetail({setIsAlertOpen,isAlertOpen}) {
  const state = useSelector((store)=> store )
  
  const handleClose=()=>{
    setIsAlertOpen(false)
  }
  return (
    <>
     {isAlertOpen && (<div className="popup-overlay">
      <div className="popup-content">
        <button onClick={handleClose} className='close-button' >Close</button>
        {state.isLoadingDetail ? ( <h3 className='content-p' >Loading...</h3> ): (<div className='content' >
        <h3> {state.flightsDetail.airline.name} </h3>
        <h4>{state.flightsDetail.aircraft.model.text}</h4>
        <img className='img-content' src={state.flightsDetail.aircraft.images.thumbnails[0].src} alt="" />
        <p>Destination : {state.flightsDetail.airport.destination.name}</p>
        <p>From : {state.flightsDetail.airport.origin.name}</p>
        <p>Status : {state.flightsDetail.status.text}</p>
        </div>) }
        
      </div>
    </div>) }
    </>
  );
}
