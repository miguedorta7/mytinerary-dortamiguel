

import { Link as Anchor } from "react-router-dom";
import CardsItineraries from "../components/CardsItineraries";
import CardCityDetail from "../components/CardCityDetail";

export default function CityDetail() {

  return (
    <div>
      <main className="main-citydetails col-12">
        <div className="main-hijo-d">
          <CardCityDetail/>
          <CardsItineraries/>
          <div className="buttons-details">
            <Anchor to="/cities">
              <button id="buttonAccess" className="btn btn-outline-primary" type="submit"> Return <i className="bi bi-search"></i>
              </button>
            </Anchor>
          </div>
        </div>

      </main>
    </div>
  );
}
