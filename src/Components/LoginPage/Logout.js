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
        push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};

export default Logout;
