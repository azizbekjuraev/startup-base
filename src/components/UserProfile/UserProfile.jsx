import React from "react";
import { Link } from "react-router-dom";
import user from "../../assets/Ellipse 1211.png";
import "../UserProfile/userprofile.css";
import Login from "../Login/Login";
const UserProfile = (props) => {
  console.log(props.data.data);
  return (
    <div className="wrapper">
      <div className="user-container">
        <h1>User Profile</h1>
        <img src={user} alt="" />
        <table>
          <thead>
            <tr>
              <td id="border-l">ID</td>
              <td id="border-r">{props.data.id}</td>
            </tr>
            <tr>
              <td id="border-l">
                User <span></span>
              </td>
              <td id="border-r">{props.data.username}</td>
            </tr>
            <tr>
              <td id="border-l">Lastname</td>
              <td id="border-r">{props.data.last_name}</td>
            </tr>
            <tr>
              <td id="border-l">Email</td>
              <td id="border-r">{props.data.email}</td>
            </tr>
            <tr>
              <td id="border-l">Phone</td>
              <td id="border-r">{props.data.phone}</td>
            </tr>
          </thead>
        </table>

        <div className="btn">
          <button className="edit-btn">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
