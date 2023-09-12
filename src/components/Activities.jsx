import {  useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import activities_actions from "../store/actions/activities";
//import { useParams } from "react-router-dom";
const { read_activities_from_itinerary } = activities_actions;

// eslint-disable-next-line react/prop-types
export default function Activities({ itinerary_id }) {
  //const { itinerary_id } = useParams();
  const dispatch = useDispatch();
 let [activities,setActivities]= useState([])
  console.log(activities);

  useEffect(() => {
    dispatch(read_activities_from_itinerary({ itinerary_id: itinerary_id }))
    .then(res=>setActivities(res.payload.activities_from_itinerary))
    .catch(err=>console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
 
  return (
    <div className="card-group-activity">
      {activities.map((each)=>(
      <div key={each._id} className="card-container-activity">
        <img src={each.photo} className="card-img-top card-img-activities" alt="..." />
        <div className="card-body-activity">
          <h5 className="card-title-activity">{each.name}</h5>
        </div>
      </div>
      ))}
    </div>
  );
}

