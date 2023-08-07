export default function CardPolaroid({src,alt,text}) {
  return (
    <div className="div-img">
      <img className="img" src={src} alt={alt} />
      <p className="text-img"> {text} </p>
    </div>
  );
}
