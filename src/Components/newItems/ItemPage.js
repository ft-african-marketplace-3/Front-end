
// Imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import ItemCard from './ItemCard';

// ItemPage
const ItemPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://buildweek4-africanmarketplace.herokuapp.com/api/auth/items')
        .then(res => {
            console.log(res)
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // Returns
    return (
        <StyledItems className = 'ItemPage'>
            <Link to="/add-item">Add New Listing</Link>
            <div className={"dataTable"}>
            <ItemCard className = 'Items' items = {items} dark={true}/>
            </div>
        </StyledItems>
    );
}

//Exports
export default ItemPage;

const StyledItems = styled.div`
width:100%;
height: 93vh;
/* background:white; */
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;

a {
    color: rgba(29, 26, 26, 1);
    margin: 2%;
    font-size: 1.5rem;
    font-family: "Roboto Condensed", sans-serif;
    position: absolute;
    top: 60%;
    left: 49%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-weight: 900;
    letter-spacing: 0.04em;
    white-space: nowrap;
    text-decoration: none;
    background: rgba(245, 245, 245, 0.8);
    padding: 0 1%;
    transition: ease 0.5s;
  }
  a:hover {
    filter: brightness(150%);
    background: rgba(245, 245, 245, 1);
    transform: translate(-50%, -50%) scale(1.05);
    transition: ease 0.2s;

.dataTable{
    background: center;
    width: 75%;
    height: 43vh;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
`