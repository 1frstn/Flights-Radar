import {createSlice} from '@reduxjs/toolkit';
import { getFlights } from './actions';
import { getFlightDetail } from './actions';


const initialState = {
    flights:[],
    flightsDetail:[],
    isLoading:true,
    isLoadingDetail:true,
    rejected:false,
    rejectedDetail:false
}

export const flightSlice = createSlice({
    name:"flights",
    initialState,
    reducers:{},
    extraReducers:{
        [getFlights.pending]:(state) => {
            state.isLoading=true;
        },
        [getFlights.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.flights = action.payload;
        },
        [getFlights.rejected]:(state) => {
            state.isLoading = false;
            state.rejected = true;
        },
        [getFlightDetail.pending] : (state) => {
            state.isLoadingDetail = true
        },
        [getFlightDetail.fulfilled] : (state,action) =>{
            state.isLoadingDetail = false;
            state.flightsDetail = action.payload;
        },
        [getFlightDetail.rejected] : (state) => {
            state.isLoadingDetail = false;
            state.rejectedDetail = true;
        }

    }
});


