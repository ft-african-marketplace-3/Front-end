import React from 'react';
import styled from 'styled-components';

export default function NewListingForm(props) {

    const { submit, setFormValues, values, disabled, errors } = props

    const onChange = (evt) => {
        const { name, value } = evt.target
        setFormValues({ ...values, [name]: value })
    }

    return(
        <NewListingStyled>
        <form className='form-container' id='listing-form'  onSubmit={submit}>
            <div classname='form-group submit'>
                <h2>Add an Item to Sell</h2>
            </div>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.price}</div>
                <div>{errors.item_type}</div>
                <div>{errors.description}</div>
                <div>{errors.location}</div>
            </div>
            <div className='new-item'>
                <label> Item Name:
                    <input
                        value= {values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <br/>
                <label> Price:
                    <input
                        value= {values.price}
                        onChange={onChange}
                        name='price'
                        type='text'
                    />
                </label>
                <br/>
                <label>What kind of item is it?
                    <select
                        onChange={onChange}  value={values.item_type} name='item_type'
                    >
                        <option value=''>- Type of Item -</option>
                        <option value='animal'>Livestock, Poultry, Fish, Bees, and their Products</option>
                        <option value='beans'>Beans and Legumes</option>
                        <option value='cereal'>Cereal (Maize, Rice and Other)</option>
                        <option value='clothes'>Clothing and Shoes</option>
                        <option value='cosmetics'>Cosmetics</option>
                        <option value='fruits'>Fruits</option>
                        <option value='animal'>Livestock, Poultry, Fish, Bees, and their Products</option>
                        <option value='other'>Other (Coffee, cotton, Tea, Tobacco, Vanilla, etc)</option>
                        <option value='peas'>Peas</option>
                        <option value='roots-tubers'>Roots and Tubers</option>
                        <option value='seeds-nuts'>Seeds and Nuts</option>
                        <option value='timber'>Timber</option>
                        <option value='veggies'>Vegetables</option>  
                    </select>
                </label>
                <br/>
                <label>Item Description:
                <input
                    value={values.description} 
                    onChange={onChange} 
                    name='description' 
                    type='textarea'
                />
                </label>
                <br/>
                <label>Location:
                    <select
                        value={values.location} 
                        onChange={onChange} 
                        name='location'
                    >
                        <option value=''>- Select a Location -</option>
                        <option value='250'>250 - RWANDA</option>
                        <option value='254'>254 - KENYA</option>
                        <option value='255'>255 - TANZANIA</option>
                        <option value='256'>256 - UGANDA</option>
                    </select>
                </label>
            </div>
            <button 
                id="submit-listing-button"
                disabled={disabled}> Save Listing
            </button>
        </form>
        </NewListingStyled>
    )
}

const NewListingStyled = styled.div `
  width: 100%;
  height: 93vh;
  background: #008b57;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

  `
