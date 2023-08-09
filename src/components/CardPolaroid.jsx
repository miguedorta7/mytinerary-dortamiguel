import { Link as Anchor } from "react-router-dom";


export default function CardPolaroid({src,alt,text,id}) {
  return (
    <Anchor to={"/city/"+id} className="div-img">
      <img className="img" src={src} alt={alt} />
      <p className="text-img"> {text} </p>
    </Anchor>
  );
}
