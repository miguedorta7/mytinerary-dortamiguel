import { useEffect, useState } from "react";
import CardPage from "../components/CardPage";
import Carousel from "../components/Carousel";
import axios from "axios";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(
    () => {
      axios("/data.json")
        .then((resp) => setData(resp.data))
        .catch((err) => console.log(err));
    },
    //callback que no debe retornar nada y no puede ser asincrona
    [] //array de dependencias
    //cuando esta vacio el EFECTO se ejecuta una unica vez cuando se monta el componente
    //Cuando tiene variables de dependencias el EFECTO se ejecuta (cuando se monta y) CADA VEZ que varia/cambia alguna de esas variables
    // [show] en este ejemplo CADA VEZ que el booleano CAMBIE, se ejecuta la callback de la linea 30
  );

  return (
    <main>
      <div className="div-card alig-items-center justify-content-center ">
        <div className="div-caja-card">
          <CardPage />
        </div>
        <div className="padre-carousel">
          <h1 className="h1-popular">Popular Mytineraries!</h1>
          <Carousel data={data} />
        </div>
      </div>
    </main>
  );
}
