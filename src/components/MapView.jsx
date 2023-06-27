import { 
    MapContainer, 
    TileLayer, useMap,Marker,
    Popup 
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import FlightDetail from './FlightDetail';



export default function MapView() {
  const state = useSelector((store) => store)
  console.log(">>>STATE",state);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleAlert = () => {
    setIsAlertOpen(!isAlertOpen);
  };

  return (
    <>
      <FlightDetail isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen} />                                          
      <h2>Map View {state.flights.length}</h2>
      <MapContainer 
         center={[-33.926845, 151.211307]} 
         zoom={9} 
         scrollWheelZoom={true}
         >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {state.flights.map((flight) => (
     <Marker position={[flight.lat, flight.lng]}>
     <Popup>
       A pretty CSS3 popup. <br /> <button onClick={handleAlert}>click me</button>
     </Popup>
   </Marker>
  ))}
  
</MapContainer>
    </>
  )
}


