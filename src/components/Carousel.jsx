/* eslint-disable react/prop-types */
import Arrow from "../components/arrow";
import CardPolaroid from "../components/CardPolaroid";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Carousel({ data }) {
  let [counter, setCounter] = useState(0);
  let [counterTo, setCounterTo] = useState(4);

  function next_slice() {
    if (data.length <= counterTo) {
      setCounter(0);
      setCounterTo(4);
    } else {
      setCounter(counter + 4);
      setCounterTo(counterTo + 4);
      console.log(counter);
      console.log(counterTo);
    }
  }

  function prev_slice() {
    if (counter <= 0) {
      setCounter(data.length-4);
      setCounterTo(data.length);
    } else {
      setCounter(counter - 4);
      setCounterTo(counterTo - 4);
      console.log(counter);
      console.log(counterTo);
    }
    console.log(counter)
    console.log(counterTo)
  }
  
  return (
    <div className="div-cajaHijo-Carousel">
      <h1 className="h1-carousel">Popular Mytineraries!</h1>
      <div className="nieto-carousel">
      <Arrow direction={"M15.75 19.5L8.25 12l7.5-7.5"} onClick={prev_slice}/>
      <div id="div-containerImagen">
        <div className="div-card-carousel">
          {data.slice(counter, counterTo).map((each) => (
          <CardPolaroid
          key={each._id}
          src={each.photo}
          alt={each._id}
          text={each.city}
          id = {each._id}
          />
          ))}
        </div>
      </div>
      <Arrow direction={"M8.25 4.5l7.5 7.5-7.5 7.5"} onClick={next_slice} />
      </div>
    </div>
  );
}
