import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function CityDetail() {
  const { _id } = useParams();
  const [city, setCity] = useState([]);

  useEffect(
    () => {
      axios(apiUrl+'cities/'+ _id)
        //.then((resp) => console.log(resp.data.data_carousel))
        .then(res =>{setCity(res.data.response)
          })
        .catch((err) => console.log(err))
    },
    [_id] 
  );
  return (
    <div>
      <main className="main-citydetails col-12">
        <div className="container-details">
        <div className="city-details">
          <h1> City Detail {city.text}</h1>
        </div>
        <div className="container-img-details">
          <img className="img-details" src={city.photo} alt="" />
        </div>
        <div className="p-citydetails">
          <p className="p-city p-title">{city.featuredLocation}</p>
          <p className="p-city">{city.featuredDescription}</p>
          <p className="p-city">{city.smalldescription}</p>
        </div>
         <Anchor to= '/cities'>
         <button id="buttonAccess" 
            className="btn btn-outline-primary" type="submit"> Return <i className="bi bi-search"></i>
         </button> 
         </Anchor>
        </div>

        
      </main>
    </div>
  );
}
