
// Imports
import React from 'react';
import { Table } from 'reactstrap';

// Variables
// const Card = styled.div`
//     background-color: white;
//     opacity: 55%;
//     width: 48%;
//     display: block;
//     margin: 2rem auto;
//     padding: 10px;
//     border: 10px solid grey;
// `
// const Name = styled.h1`
//     font-size: 2rem;
//     text-decoration: 5px underline grey;
// `
// const H2 = styled.h2`
//     font-size: 1rem;
// `
const ItemCard = (props) => {
    const {items} = props;

    // Returns
    return (
        <Table Striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Item Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {items.map((res, index) => {
                return (
          <tr>
            <th scope="row" key={index}>{index}</th>
            <td>{res.name}</td>
            <td>{res.location}</td>
            <td>{res.item_type}</td>
            <td>{res.price}</td>
          </tr>)})}
        </tbody>
      </Table>
    )
}

// Exports
export default ItemCard;



// items.map((res, index) => {
//     return 