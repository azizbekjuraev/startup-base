import React, { useState, useEffect } from "react";
import logo from "../../assets/Group 46918.png";
import axios from "axios";
import UserProfile from "../UserProfile/UserProfile";
import { Link } from "react-router-dom";

const Test2 = () => {
  const [data, setData] = useState();
  const [logged, setLogged] = useState(false);
  const handleSubmit = (e) => {
    let data = Object.fromEntries(new FormData(e.target));
    e.preventDefault();
    axios
      .post("http://testing.s-solution.uz/api/v1/user/sign-in/", data)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        setLogged(true);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };

  console.log(data);

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // {data ? <UserProfile data={data} key={data.id} /> : null}
  return (
    <>
      {logged ? (
        <UserProfile data={data} key={data.id} />
      ) : (
        <div className="container">
          <div className="startup">
            <img src={logo} alt="" style={{ width: "80px" }} />{" "}
            <div className="language">
              <select name="" id="">
                <option value="">English</option>
                <option value="">Uzbek</option>
                <option value="">Korean</option>
                <option value="">German</option>
              </select>
            </div>
          </div>
          <div className="header-wrapper">
            <div className="header">
              <h1>Login</h1>
              <p>Enter your information to use the system.</p>
            </div>
            <form action="" method="post" onSubmit={handleSubmit}>
              <input type="text" name="email" placeholder="Email" />
              <br />
              <input type="text" name="password" placeholder="Password" />
              <p className="forgot">Forgot Password?</p>
              {/* <Link to="user/profile"> */}
              <button>Log in</button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Test2;
