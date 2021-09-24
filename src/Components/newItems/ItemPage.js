
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