import BasicExample from "../components/CardCities";

export default function CarouselCities({data}) {
  return (
    <div className="cards-cities">
          {data.slice(8, 12).map((each) => (
            <BasicExample key={each.id} src={each.photo} text={each.city} />
          ))}
        </div>
  )
}
