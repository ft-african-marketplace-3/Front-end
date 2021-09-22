
// Imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';

// ItemPage
const ItemPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://fieldmarketbackend.herokuapp.com/api/users')
        .then(res => {
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // Returns
    return (
        <div className = 'ItemPage'>
            <h1 className = 'header'>Field Market Items</h1>
            <ItemCard className = 'Items' items = {items} />
        </div>
    );
}

//Exports
export default ItemPage;