import * as yup from 'yup';

const loginSchema =yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required!'),

    })
    export default loginSchema;