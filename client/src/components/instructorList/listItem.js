import React from "react";
import './listItem.css'

export const ListItem = props => (
  <div className="card instructorCard">
    <img className="card-img-top" src={`${props.Instructors.picture}`} alt=""/>
    <div className="card-body">
      <h4 className="card-title">{`${props.Instructors.firstName} ${props.Instructors.lastName}`}</h4>
      <h5 className="card-title">{`# of Classes: ${props.Instructors.classes.length}`}</h5>
      <a className="btn btn-sm btn-primary" href={`/instructors/${props.Instructors._id}`}>View</a>
    </div>
  </div>
);

export default ListItem;