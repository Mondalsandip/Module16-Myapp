import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";

const Login = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassvalue] = useState("");
  let navigate=useNavigate()
  let location=useLocation()

  const emailChangeHandle = e =>  setEmailValue(e.target.value)
  const passwordChangeHandle = e =>  setPassvalue(e.target.value);
  

  const formValue = e =>{
    e.preventDefault();
    setEmailValue("");
    setPassvalue("");
    if (emailValue == "sandipmondal00@gmail.com" && passValue == "password") {
      navigate('/',true)

    }else{

    }

  };

  console.log(location.pathname)

  return (
    <div className="login_details">
      <h1>Login Page</h1>
      <form className="form_data" onSubmit={formValue}>
        <div>
          <input  type="email" name=""  value={emailValue}  onChange={emailChangeHandle}  id="email"  placeholder="Enter email" />
        </div>
        <div>
          <input type="password"  name=""  value={passValue}  onChange={passwordChangeHandle}  id="password"  placeholder="Enter password"  />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
