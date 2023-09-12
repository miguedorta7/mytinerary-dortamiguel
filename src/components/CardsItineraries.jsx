
/* eslint-disable react/prop-types */
import { useState } from "react";
import LikeButton from "../components/ButtonLike";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import itineraries_actions from "../store/actions/itineraries";
import { useParams } from "react-router-dom";

import Activities from "../components/Activities";

const { read_itineraries_from_city } = itineraries_actions;

function CardItinerary({ itinerary }) {
  const [show, setShow] = useState(false);
  // Estado por tarjeta

  return (
    // eslint-disable-next-line react/prop-types
    <div
      key={itinerary._id}
      id={itinerary._id}
      className="card text-bg-white card-view"
    >
      <h5 className="title">{itinerary.name}</h5>
      <img src={itinerary.photo} className="card-img img-view" />
      <div className="collapse-viewCard">
        <LikeButton />
      </div>
      <div className="container-itineraries">
        <div>
          <h6>User</h6>
          <img
            className="img-userItinerary"
            src={itinerary.city_id.admin_id.photo}
            alt="img-user"
          />
          <p>{itinerary.city_id.admin_id.name}</p>
        </div>
        <div>
          <h6>Hashtags:</h6>
          <div className="container-hashtag"></div>
          <div className="hashtag">
            <p className="p-hashtag">{itinerary.tags[0]}</p>
            <p className="p-hashtag">{itinerary.tags[1]}</p>
            <p className="p-hashtag">{itinerary.tags[2]}</p>
          </div>
        </div>
        <div>
          <h6>Duration:</h6>
          <div className="time-number">
            <img
              className="time-duration img-duration"
              src="\img\3233567.png"
              alt=""
            />
            <p>{itinerary.duration}</p>
          </div>
        </div>
        <div>
          <h6>Price</h6>
          <div className="price-number">
            <p>{"💵".repeat(itinerary.price)}</p>
          </div>
        </div>
      </div>
      <div className="container-father-activity">
        <input
          onClick={() => {
            setShow(!show);
          }}
          className="btn btn-danger"
          type="button"
          value={show ? "Hidden" : "View Activities ↓"}
        />
        {show && <Activities itinerary_id={itinerary._id} />}
      </div>
    </div>
  );
}

export default function CardsItineraries() {
  const { _id } = useParams();
  const itineraries = useSelector((store) => store.itineraries.itineraries_from_city);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(read_itineraries_from_city(_id));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-view-itinerary">
      {itineraries.length === 0 ? (
        <div className="text-error-itineraries">
          <div>
              <img className="img-notfound" src="/img/alertNoftfound.png" alt="Not found" />
              </div>
              Not found Itineraries, please type another!
        </div>
      ) : (
        <div>
          {itineraries.map((each) => (
            <CardItinerary key={each._id} itinerary={each} />
          ))}
        </div>
      )}

    </div>
  );
}
