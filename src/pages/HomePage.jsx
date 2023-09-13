import { useEffect } from "react";
import CardPage from "../components/CardPage";
import Carousel from "../components/Carousel";
/* import axios from "axios";
import apiUrl from "../apiUrl"; */
import { useSelector,useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const {read_carousel} = city_actions


export default function HomePage() {

  //const store = useSelector(store=>store)
  //console.log(store)
  //const city_reducer = useSelector(store=>store.cities)
  //console.log(city_reducer)
  const carousel = useSelector(store=>store.cities.carousel)
  console.log(carousel)
  const dispatch = useDispatch()

  useEffect(
    () => {

      if(carousel.length === 0){
        dispatch(
          read_carousel())

      }
      

    },
    //callback que no debe retornar nada y no puede ser asincrona
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] //array de dependencias
    //cuando esta vacio el EFECTO se ejecuta una unica vez cuando se monta el componente
    //Cuando tiene variables de dependencias el EFECTO se ejecuta (cuando se monta y) CADA VEZ que varia/cambia alguna de esas variables
    // [show] en este ejemplo CADA VEZ que el booleano CAMBIE, se ejecuta la callback de la linea 30
  );

  return (
    <main className="main-home">
      <div className="div-cardContainerFlex">
        <div className="div-caja-card">
          <CardPage />
        </div>
        <div className="div-caja-carousel">

          <Carousel data={carousel} />
        </div>
      </div>
    </main>
  );
}
