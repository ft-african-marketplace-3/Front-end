import React, { useEffect } from "react";
import axiosWithAuth from "../Utills/AxiosWithAuth";

const Logout = (props)=> {
    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(resp => {
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              localStorage.removeItem("username");
            //   props.history.push('/');
            }).catch(err=> {
                console.log(err);
            });
    }, []);


    return(<div></div>);
}

export default Logout;