import "../index.css";
import BannerCities from "../components/BannerCities";
import SearchCities from "../components/SearchCities";
import CarouselCities from "../components/CarouselCities";
import { useEffect,useState } from "react";
import axios from "axios";


export default function Cities() {


  const [data,setData] = useState([])

  useEffect(()=>{
    axios('/data.json')
    .then(res=> setData(res.data))
    .catch(err=> console.log(err))
  },
  []
  )

  return (
    <main className="main-cities">
      <div className="container-cities">
        <BannerCities />
        <div className="search-cities">
          <SearchCities />
        </div>
        <CarouselCities data={data}/>
      </div>
    </main>
  );
}
