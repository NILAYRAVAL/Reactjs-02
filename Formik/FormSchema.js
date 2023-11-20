
import * as Yup from 'yup'

export const FormSchema = Yup.object ({
    name: Yup.string().min(3,'To short').max(20, 'To Long').required('Name is important'),
    Email :Yup.string().email('Invalid Email') .required('Email is important'),
})

