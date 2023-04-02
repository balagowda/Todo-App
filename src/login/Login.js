import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import LoginAccess from "../action/auth.action";
import './login.css';

const Login = () => {

  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(LoginAccess());
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://user-images.githubusercontent.com/55911470/214786962-51be4929-05a4-489a-add4-79033c7fe037.png"
          alt=""
        />
        <button onClick={handleLogin}>Login with google</button>
        <p>Please Login to use TodoApp</p>
      </div>
    </div>
  );
};

export default Login;
