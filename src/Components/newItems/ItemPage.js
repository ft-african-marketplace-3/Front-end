// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

// import { getData, fetchFail } from '../actions';

// // import axios from 'axios';

// const Data = (props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { item, isFetching, error, getData, fetchFail } = props;
  
// // useEffect(() => {
// //             axios.get('https://buildweek4-africanmarketplace.herokuapp.com/api/auth/items')
// //             .then(res => {
// //               console.log(res)
// //                 // setItems(res.data)
// //             })
// //             .catch(err => {
// //                 console.log(err)
// //             })
// //         }, [])
      
//   console.log(item, getData)
//   useEffect(() => {
//     props.dispatch(getData());
//   }, [getData, props]);

//   if (error) {
//     return <h2>We got an error: {error}</h2>;
//   }

//   if (isFetching) {
//     return <h2>Fetching person for ya!</h2>;
//   }

  

//   // const handleClick = ()=> {
//   //   props.dispatch(getData());
//   // };
  



//   return (
//     <>
//       <div>
//       {item.location}
//       </div>
//     </>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     item: state.item,
//     isFetching: state.isFetching,
//     error: state.error
//   };
// };

// export default connect(mapStateToProps, { getData, fetchFail })(Data);






































// Imports
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import styled from 'styled-components'
// import { useSelector, useDispatch } from "react-redux";
// import { loggingIn } from "../Actions/index";

import ItemCard from './ItemCard';




// ItemPage
const ItemPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://buildweek4-africanmarketplace.herokuapp.com/api/auth/items')
        .then(res => {
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