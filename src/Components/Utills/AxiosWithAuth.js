import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://buildweek4-africanmarketplace.herokuapp.com/api/users'
    });
}

export default axiosWithAuth;