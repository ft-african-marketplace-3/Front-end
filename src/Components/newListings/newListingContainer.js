import React, { useState, useEffect } from "react";
import NewListingForm from "./newListingForm";
import schema from '../validations/listingSchema';
import axios from 'axios';
import styled from 'styled-components'
import * as yup from 'yup';
import { useHistory } from "react-router-dom";

const initialFormValues = {
    name: '',
    price: '',
    item_type: '',
    description: '',
    location: '',
}
const initialFormErrors = {
    name: '',
    price: '',
    item_type: '',
    description: '',
    location: '',
}

const initialListing = []
const initialDisabled = true

export default function NewListing() {
  const [listing, setListing] = useState(initialListing)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const { push } = useHistory()

  // const postNewListing = newItemListing => {
  //   axios
  //     .post('https://buildweek4-africanmarketplace.herokuapp.com/api/auth/newItem', newItemListing)
  //     .then((res) => {
  //       setListing([...listing, res.data,])
  //       setFormValues(initialFormValues);
  //       console.log('Here is postNewOrder', postNewListing)
  //     }).catch(err => {
  //       debugger;
  //       console.error(err);
  //       setFormValues(initialFormValues)
  //     })
  // }

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

  const formSubmit = (e) => {
    e.preventDefault();
      const newItemListing = {
        itemName: formValues.name.trim(),
        itemPrice: formValues.price.trim(),
        itemType: formValues.item_type.trim(),
        itemDescription: formValues.description.trim(),
        itemLocation: formValues.location.trim(),
      }
        axios
          .post('https://buildweek4-africanmarketplace.herokuapp.com/api/auth/newItem', newItemListing)
          .then((res) => {
            setListing([...listing, res.data,])
            push('/listing')
            setFormValues(initialFormValues);
            // newItemListing
            // console.log(res, "this here", postNewListing)
            console.log(newItemListing)
          }).catch((err) => {
            debugger;
            console.error(err);
            setFormValues(initialFormValues)
            console.log('here is the catch...')
          })
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
            setFormValues={setFormValues}
          />
      </NewItemStyled>
  )
}

const NewItemStyled = styled.div `

  width: 100%;
  height: 93vh;
  background: chocolate;
`