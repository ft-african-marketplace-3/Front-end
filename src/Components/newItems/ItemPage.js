
// Imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'

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
            <h1 className = 'header'>Field Market Items</h1>
            <ItemCard className = 'Items' items = {items} />
        </StyledItems>
    );
}

//Exports
export default ItemPage;

const StyledItems = styled.div`
width:100%;
height: 93vh;
display: flex;
flex-direction: column;
align-items: center;
`