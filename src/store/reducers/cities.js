import { createReducer } from "@reduxjs/toolkit";
import city_actions from "../actions/cities";

const {read_carousel,read_cities,read_city} = city_actions
   
const initial_state={
    carousel:[],
    cities:[],
    city:{}
}

const city_reducer = createReducer(
    initial_state, //Estado inicial
    builder => builder.addCase(       //callback constructora de estados globales (agrega un caso de reducción para cada acción)
        read_carousel.fulfilled,                           //acción a reducir
        (state, action)=>{                      //callback que depende del estado de la acción y es la encargada de reducir los estados
            let new_state = {...state, 
                carousel:action.payload.carousel
            }
            return new_state
        }
    )
    .addCase(
        read_cities.fulfilled,
        (state,action) => {
            let new_state ={...state,
                cities: action.payload.cities //esta propiedad tiene la respuesta del consumo de la petición, la respuesta con todas la ciudades.
            }
            return new_state
        }
    )
    .addCase(
        read_city.fulfilled,
        (state,action) => {
            let new_state ={...state,
                city: action.payload.city //esta propiedad tiene la respuesta del consumo de la petición, la respuesta con todas la ciudades.
            }
            return new_state
        }
    )

)


export default city_reducer