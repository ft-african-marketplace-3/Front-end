
// Imports
import React from 'react';
import {useHistory} from 'react-router-dom';

// ItemPage
function ItemPage() {
    const history = useHistory();
    const routeToShop = () => {
        history.push('/items-list');
    }

    // Returns
    return(
        <div className = 'itempage-wrapper'>
            <img className = 'itempage-image' src = '' alt = '' />
            <button onClick = {routeToShop} className = 'md-button shop-button'>Shop Now!</button>
        </div>
    )
}

//Exports
export default ItemPage;