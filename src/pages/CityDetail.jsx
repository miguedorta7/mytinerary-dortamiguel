import { useParams } from "react-router-dom";

export default function CityDetail() {
  const { city_id } = useParams();
  //Este hook se engancha a la URL para evaluar todos los parametros dinamicos que tiene la URL
  //Este hook devuelve un objeto donde cada clave es la ruta dinamica definida en el enrutador y donde cada valor es el valor de la URL
  return <div>CityDetail of city {city_id} construction</div>;
}
