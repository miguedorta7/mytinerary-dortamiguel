
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_city } = city_actions;


export default function CardCityDetail() {
    const { _id } = useParams();
    const city = useSelector((store) => store.cities.city);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(read_city({ _id }));
    }, [_id, dispatch]);


  return (
    <div>
        <div className="container-details">
            <div className="city-text-details">
              <h1> City Detail {city.text}</h1>
            </div>
            <div className="container-img-details">
              <img className="img-details" src={city.photo} alt="" />
            </div>
            <div className="p-citydetails">
              <p className="p-city p-title"><img className='ubicacion ' src="/img/location_map_pin_mark_icon_148685.png" alt="" />{city.featuredLocation}</p>
              <p className="p-city">{city.featuredDescription}</p>
              <p className="p-city2">{city.smalldescription}</p>
            </div>
          </div>
    </div>
  )
}

