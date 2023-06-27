import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "./constant";
import axios from "axios";

export const getFlights = createAsyncThunk("flights/getFlight", async () => {
    
    const res = await axios.request(options);

    const newData = res.data.aircraft.map((flight)=>({
        id:flight[0],code:flight[1],
        lat:flight[2],lng:flight[3]
    }))
    console.log(">>>NEW_RES",newData);
    return newData;
});

export const getFlightDetail = createAsyncThunk("flights/getFlightDetail", 
  async (param) => {
    const options = {
        method: 'GET',
        url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
        params: {flight: param.id},
        headers: {
          'X-RapidAPI-Key': '2fb1dc7c84msh2d969393e50b817p1f6691jsnc3907e9949c4',
          'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
        }
      };
      const res = await axios.request(options);
      console.log(">>>DETAIL",res.data);
      return res.data ;
});