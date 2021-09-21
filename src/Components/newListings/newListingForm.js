import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

export default function newListingForm(props) {

    const { submit, values, disabled, errors } = props

    const history = useHistory();

    const successRoute = () => {
        history.push("/seller/your-listings");
    }

    const onChange = (evt) => {
        const { name, value } = evt.target
        setValues({ ...values, [name]: value })
    }

    const onSubmit = (evt) => {
        history.push("/seller/your-listings");
        evt.preventDefault();
        submit();
    }


    return(
        <form className='form-container' id='listing-form' onChange={onChange} onSubmit={onSubmit}>
            <div classname='form-group submit'>
                <h2>Add an Item to Sell</h2>
            </div>
            <div className='errors'>
                <div>{errors.itemName}</div>
                <div>{errors.itemPrice}</div>
                <div>{errors.itemType}</div>
                <div>{errors.itemDescription}</div>
                <div>{errors.itemLocation}</div>
            </div>
            <div className='new-item'>
                <label> Item Name:
                    <input
                        value= {values.itemName}
                        onChange={onChange}
                        name='itemName'
                        type='text'
                    />
                </label>
                <label> Price:
                    <input
                        value= {values.itemPrice}
                        onChange={onChange}
                        name='itemPrice'
                        type='text'
                    />
                </label>
                <label>What kind of item is it?
                    <select
                        onChange={onChange}  value={values.itemType} name='itemType'
                    >
                        <option value=''>- Type of Item -</option>
                        <option value='produce'>Produce</option>
                        <option value='baked-goods'>Baked Goods</option>
                        <option value='jewelry'>Jewelry</option>
                        <option value='clothing'>Clothing</option>
                        <option value='home'>Home Decor</option>
                    </select>
                </label>
                    <br/>
                <label>Item Description:
                <input
                    value={values.itemDescription} 
                    onChange={onChange} 
                    name='itemDescription' 
                    type='textarea'
                />
                </label>
                <label>Location:
                    <input 
                        value={values.itemLocation} 
                        onChange={onChange} 
                        name='itemLocation' 
                        type='text' 
                    />
                </label>

            </div>
            <button 
                id="submit-listing-button" 
                onClick={successRoute} 
                disabled={disabled}> Save Listing
            </button>
        </form>
    )
}