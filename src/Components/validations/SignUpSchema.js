import * as yup from 'yup';

const loginSchema =yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please enter your name'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Email is required!'),
    username: yup
        .string()
        .trim()
        .required('Username is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required!'),
    confirmPassword: yup
        .string()
        .test('passwords-match', 'Passwords do not match', function(value){
            return this.parent.password === value
        })
        .required('Please confirm your password here.'),
    termsOfService: yup.boolean(),

    })
    export default loginSchema;