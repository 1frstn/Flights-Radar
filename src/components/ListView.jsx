import { useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import FlightDetail from "./FlightDetail";
import Swal from 'sweetalert2';
import { getFlightDetail } from "../app/actions";

export default function ListView() {
  const dispatch = useDispatch();
  const state = useSelector(store => store)
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  
  const handleAlert = (id) => {
    dispatch(getFlightDetail({id}))
    setIsAlertOpen(!isAlertOpen);
  };
  return (
    <>
      <FlightDetail isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen} />
      <h2>{state.flights.length} flights found </h2>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tail Number</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Details</th>
        </tr>
      </thead>
      {state.flights.map((flight)=>(
        <tbody>
        <tr key={flight.id}>
          <td>{flight.id}</td>
          <td>{flight.code}</td>
          <td>{flight.lat}</td>
          <td>{flight.lng}</td>
          <td><button 
                  className="td-btn"
                  onClick={() => handleAlert(flight.id)}
                  
                >Detail</button></td>
        </tr>
      </tbody>
      ))}
    </Table>
    </>
  )
}
