import LikeButton from "../components/ButtonLike";
import DropdownButton from "../components/ButtonActivity";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import itineraries_actions from "../store/actions/itineraries";
import { useParams } from "react-router-dom";

const { read_itineraries_from_city } = itineraries_actions;

export default function CardsItinerariesl() {
  const { _id } = useParams();
  const itineraries = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(read_itineraries_from_city(_id));
  }, [_id, dispatch]);

  return (
    <div>
      <div className="container-view-itinerary">
        {itineraries.length === 0 ? (
          <div className="text-error-itineraries">
            <div>
              <img
                className="img-notfound"
                src="/img/alertNoftfound.png"
                alt="Not found"
              />
            </div>
            Not found Itineraries, please type another!
          </div>
        ) : (
          <div>
            {itineraries.map((each) => (
              <div key={each._id} id="carditinerary" className="card text-bg-white card-view">
                <h5 className="title">{each.name}</h5>
                <img src={each.photo} className="card-img img-view"/>
                <div className="collapse-viewCard">
                  <LikeButton />
                </div>
                <div className="container-itineraries">
                  <div>
                    <h6>User</h6>
                    <img className="img-userItinerary" src={each.city_id.admin_id.photo} alt="img-user"/>
                    <p>{each.city_id.admin_id.name}</p>
                  </div>
                  <div>
                    <h6>Hashtags:</h6>
                    <div className="container-hashtag"></div>
                    <div className="hashtag">
                      <p className="p-hashtag">{each.tags[0]}</p>
                      <p className="p-hashtag">{each.tags[1]}</p>
                      <p className="p-hashtag">{each.tags[2]}</p>
                    </div>
                  </div>
                  <div>
                    <h6>Duration:</h6>
                    <div className="time-number">
                      <img className="time-duration img-duration" src="\img\3233567.png" alt=""/>
                      <p>{each.duration}</p>
                    </div>
                  </div>
                  <div>
                    <h6>Price</h6>
                    <div className="price-number">
                      <p>{"💵".repeat(each.price)}</p>
                    </div>
                  </div>
                </div>
                <div className="option-activity-Container">
                  <div className="option-activity">
                    <DropdownButton />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
