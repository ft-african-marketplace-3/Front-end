import React, { useEffect } from "react";
import axiosWithAuth from "../Utills/AxiosWithAuth";
import { useHistory } from "react-router";
const Logout = (props) => {
  const { push } = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((resp) => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");
        props.history.push('/login');
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");
        push("/");
      });
  }, );

  return <div></div>;
};

export default Logout;
