import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";
import contacts from "../contacts";

function Card(props) {
  // console.log(props)
  console.log(contacts);
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Info info={props.tel} />
        <Info info={props.email} />
      </div>
    </div>
  );
}

export default Card;
