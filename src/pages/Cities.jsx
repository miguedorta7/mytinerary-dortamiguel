import "../index.css";
import BannerCities from "../components/BannerCities";
import CardCities from "../components/CardCities";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";

export default function Cities() {
  const [data, setData] = useState([]);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();

  useEffect(() => {
    try {
      axios(apiUrl + "cities?city=" + text.current.value)
        .then((res) => setData(res.data.response))
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            // Cuando el servidor responde con un 404, muestra el mensaje personalizado
            setData([]);
          } else {
            // Si hay otro tipo de error, puedes manejarlo aquí
            console.error(err);
          }
        });
    } catch (error) {
      console.error(error);
    }
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
        <BannerCities />
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
            {/* <button id="buttonAccess" 
              className="btn btn-outline-primary" type="submit"> Search <i className="bi bi-search"></i>
              </button> */}
          </form>
        </div>

        {data.length === 0 ? (
          <div className="text-error">Not found city, please type another</div>
        ) : (
          <div className="cards-cities">
            {data.map((each) => (
              <CardCities
                key={each._id}
                src={each.photo}
                alt={each._id}
                text={each.city}
                migue={each._id}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
