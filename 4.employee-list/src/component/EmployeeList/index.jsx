import React from "react";
import Employee from "../Employee";
import "./index.css";

const employeeData = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Developer",
    image:
      "https://cdn0.iconfinder.com/data/icons/diverse-cartoon-men-avatars/300/37-512.png",
    email: "john@employee.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    image:
      "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png",
    email: "jane@employee.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Maya Kate",
    position: "Network Engineer",
    image: "https://img.freepik.com/free-icon/teacher_318-210126.jpg",
    email: "maya@employee.com",
    phone: "987-456-3210",
  },
  {
    id: 4,
    name: "Emily Brown",
    position: "Marketing Specialist",
    image:
      "https://cdn.imgbin.com/24/10/13/imgbin-link-the-legend-of-zelda-the-wind-waker-cartoon-the-legend-of-zelda-gzDmk82s2BuLjgAFmMB3RKeax.jpg",
    email: "emily@example.com",
    phone: "111-222-3333",
  },
  {
    id: 5,
    name: "Mike Anderson",
    position: "Sales Representative",
    image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/51-512.png",
    email: "mike@example.com",
    phone: "444-444-4444",
  },
  {
    id: 6,
    name: "Alex Johnson",
    position: "Graphic Designer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdUNllTvwag4LcIRAu9tcb8tgbR_RoaGQSE3_Zv6zS2ewaBC6z9PuJ2bYtfxwCRx7d6U&usqp=CAU",
    email: "alex@example.com",
    phone: "555-555-5555",
  },
];

const EmployeeList = () => {
  return (
    <div>
      <h1 className="heading">Employee List</h1>
      <div className="employee-container">
        {employeeData.map((employee) => (
          <Employee key={employee.id} data={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
