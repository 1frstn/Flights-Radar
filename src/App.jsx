import { useEffect, useState } from "react"
import ListView from "./components/ListView";
import MapView from "./components/MapView";
import { getFlights } from "./app/actions";
import { useDispatch } from "react-redux";
import FlightDetail from "./components/FlightDetail";

function App() {

  const dispatch = useDispatch();

  const [showMapView,setShowMapView] = useState(true);
  
  useEffect(() => {
     dispatch(getFlights())
  },[]); 

  return (
    <>
      <h1>Flight Radar</h1>
      <div className="view-btns">
        <button 
           onClick={()=>setShowMapView(true)}
           className={`${showMapView && 'active'}`}
          >Map View</button>
        <button 
           onClick={()=>setShowMapView(false)}
           className={`${!showMapView && 'active'}`} 
          >List View</button>
      </div>
      <FlightDetail/>
      {
        showMapView ? <MapView/> : <ListView/>
      }
    </>
  )
}

export default App
