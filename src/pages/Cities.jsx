import "../index.css";
import BannerCities from "../components/BannerCities";
import CardCities from "../components/CardCities";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_cities } = city_actions;

export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();
  console.log(cities);

  useEffect(() => {
    dispatch(read_cities({ text: text.current?.value }));
  }, [reEffect]);

  function handleFilter() {
    {
      console.log(text.current.value);
      setReEffect(!reEffect);
    }
  }

  return (
    <main className="main-cities">
      <div className="container-cities">
        <div>
          <BannerCities />
        </div>
        <div className="search-cities">
          <form
            id="buscador-opciones"
            className="d-flex justify-content-end "
            role="search"
          >
            <div
              id="formCategorias"
              className="d-flex flex-wrap formCategories"
            ></div>
            <input
              ref={text}
              id="inputBuscador"
              className="form-control me-2"
              type="search"
              placeholder="Search your city"
              aria-label="Search"
              onKeyUp={handleFilter}
            />
          </form>
        </div>
        <div>
          {cities.length === 0 ? (
            <div className="text-error">
              <div>
              <img className="img-notfound" src="/img/alertNoftfound.png" alt="Not found" />
              </div>
              Not found city, please type another!
            </div>
          ) : (
            <div className="cards-container-cities">
              {cities.map((each) => (
                <CardCities
                  key={each._id}
                  src={each.photo}
                  alt={each._id}
                  text={each.city}
                  cityId={each._id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
