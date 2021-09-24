import * as yup from 'yup';

const listingSchema =yup.object().shape({
        name: yup
            .string()
            .required('The name of your item is required.'),
        price: yup
            .number()
            .required('The price of your item is required.'),
        item_type: yup
            .string()
            .oneOf(['animal', 'beans', 'cereal', 'clothes', 'cosmetics', 'fruits', 'other', 'peas', 'roots-tubers', 'seeds-nuts', 'timber', 'veggies'], 'Please select a sales category for your item.'),
        description: yup
            .string()
            .required('A description of your item is required.')
            .min(15, 'description must be at least 15 characters long.'),
        location: yup
            .string()
            .oneOf(['250', '254', '255', '256',], 'Please select a location.'),
})
export default listingSchema;