import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_itineraries_from_city = createAsyncThunk(
    'read_itineraries_from_city',
    async(_id)=>{
        console.log(_id)
        try {
            let data = await axios(apiUrl +'itineraries?_id='+_id)
            console.log(apiUrl +'itineraries?_id='+_id)
            return{
                itineraries_from_city: data.data.response,
            }
        } catch (error) {
            console.log(error)
            return{
                itineraries_from_city:[]
            }
        }
    }
)

const itineraries_actions = {read_itineraries_from_city}
export default itineraries_actions