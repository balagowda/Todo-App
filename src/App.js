import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import { useSelector } from "react-redux";

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/login");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route path="/home" exact element={<Home />} />

      <Route path="/login"  element={<Login />} />

      <Route path="*"  element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
