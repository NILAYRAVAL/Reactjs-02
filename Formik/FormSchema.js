
import * as Yup from 'yup'

export const FormSchema = Yup.object ({
    name: Yup.string().min(3,'To short').max(20, 'To Long').required('Name is important'),
    Email :Yup.string().email('Invalid Email') .required('Email is important'),
    Age : Yup.number().min(10).max(50).required('Enter the Age'),

    Pass: Yup.string()
    .required('Enter the password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Enter strong Password"),

    Cpass: Yup.string()
    .required("Enter Confirm Password")
     .oneOf([Yup.ref('Pass'), null], "Both Password not same")
})

