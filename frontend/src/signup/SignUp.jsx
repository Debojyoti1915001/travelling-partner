import React, { useState } from "react";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const collectData = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = user;
    const url = "http://localhost:8080/register";
     const res = await fetch(url,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, confirmPassword,type:0
      })
      
     });

     const data = await res.json();

     if(data.status === 422 || !data){
      window.alert("Invalid Registration")
     }
      if(!(password === confirmPassword)){
        window.alert("Password not matching")
      }
     else{
      navigate("/home");
     }
     

  };
  return (
    <>
      <div className="sign-page">
        <div className="sign-left">
              <h1>Waste Deliver</h1>
          <div className="sign-main">
            <h1>Signup to your Account</h1>
            <p>See what is going on with your business</p>
          </div>
          
          <form>
            <div className>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Monica Chauhan"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInput}
                id="name"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="mail@abc.com"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                id="email"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                placeholder="************"
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                id="password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                placeholder="************"
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInput}
                id="confirmPassword"
              />
            </div>

            <div className="checkbox-container">
              <input type="checkbox" />
              <p>Are you a mentor?</p>
            </div>
            <input
              type="submit"
              onClick={collectData}
              className="signbtn"
              value="Signup"
            />
          </form>


          <div className="haveacnt">
            <p>Already have an accunt?</p>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </div>
        </div>
        <div className="sign-right">
          <img src="./images/Group.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
