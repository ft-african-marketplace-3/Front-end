import React, { useState, useEffect } from "react";
import NewListingForm from "./newListingForm";
import schema from '../validations/listingSchema';
import axios from 'axios';
import styled from 'styled-components'
import * as yup from 'yup';

const initialFormValues = {
    itemName: '',
    itemPrice: '',
    itemType: '',
    itemDescription: '',
    itemLocation: '',
}
const initialFormErrors = {
    itemName: '',
    itemPrice: '',
    itemType: '',
    itemDescription: '',
    itemLocation: '',
}

const initialListing = []
const initialDisabled = true

export default function NewListing() {
  const [listing, setListing] = useState(initialListing)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewListing = newItemListing => {
    axios
      .post('', newItemListing)
      .then((res) => {
        setListing([...listing, res.data,])
        setFormValues(initialFormValues);
        console.log('Here is postNewOrder', postNewListing)
      }).catch(err => {
        debugger;
        console.error(err);
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors(
          {...formErrors,[name]: '',}
        );
      })
      .catch((err) => {
        setFormErrors(
          { ...formErrors,[name]: err.errors[0]}
        );
      });
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
      const newItemListing = {
        itemName: formValues.itemName.trim(),
        itemPrice: formValues.itemPrice.trim(),
        itemType: formValues.itemType.trim(),
        itemDescription: formValues.itemDescription.trim(),
        itemLocation: formValues.itemLocation.trim(),
      }
      postNewListing(newItemListing);
  }
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
     });
  }, [formValues])

  return(
      <NewItemStyled className='listing-div'>
          <NewListingForm className='listing-form'
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
      </NewItemStyled>
  )
}

const NewItemStyled = styled.div `

  width: 100%;
  height: 93vh;
  background: chocolate;
`