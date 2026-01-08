import React from "react";
import "./index.css";

const Employee = (props) => {
  const { data } = props;
  const { name, position, image, email, phone } = data;
  return (
    <div className="employee-card">
      <img src={image} alt={name} className="employee-image" />
      <h2 className="employee-name">{name}</h2>
      <p className="employee-position">{position}</p>
      <p className="employee-email">Email: {email}</p>
      <p className="employee-phone">Phone: {phone}</p>
    </div>
  );
};

export default Employee;
