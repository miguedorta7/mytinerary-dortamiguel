import { Link as Anchor } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function CardPolaroid({src,alt,text,id}) {
  return (
    <Anchor to={"/city/"+id} className="div-img">
      <div className="card-container-carousel">
        <img className="img" src={src} alt={alt} />
        <p className="text-img"> <img className="ubicacion" src="/img/location_map_pin_mark_icon_148685.png" alt="ubicacion" /> {text} </p>
      </div> 
      
    </Anchor>
  );
}
