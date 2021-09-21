import * as yup from 'yup';

const listingSchema =yup.object().shape({
        itemName: yup
            .string()
            .required('The name of your item is required.'),
        itemPrice: yup
            .string()
            .trim()
            .required('The price of your item is required.'),
        itemType: yup
            .string()
            .oneOf(['produce', 'baked-goods', 'jewelry', 'clothing', 'home'], 'Please select a sales category for your item.'),
        itemDescription: yup
            .string()
            .required('A description of your item is required.')
            .min(15, 'description must be at least 15 characters long.'),
        itemLocation: yup
            .string()
            .required('A location of your item is required.'),
    

})
export default listingSchema;