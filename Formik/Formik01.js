import React from 'react'
import {useFormik} from 'formik'
import { FormSchema } from './FormSchema';

function Formik01() {

    const formInitialValues = {
        name: '',
        Email: ''
    }

    //  const formik = useFormik({

    //     initialValues : formInitialValues,
    //     onSubmit: (values) => {
    //         console.log(values);
    //         console.log(values.name);
    //         console.log(values.Email);
    //     }
    // });
    
    const {handleChange,handleSubmit,values,errors} = useFormik({

        initialValues : formInitialValues,
        validationSchema: FormSchema,

        onSubmit: (values) => {
            console.log(values);
            console.log(values.name);
            console.log(values.Email);
        }
    });






  return (
    <div >
        <h1>Formik demo</h1>
        
        {/* <form onSubmit={formik.handleSubmit}> */}
        <form onSubmit={handleSubmit}>

        <label htmlFor=''> Enter the Name: </label>
        <input type='text' name='name'
        //  onChange={formik.handleChange}
            onChange={handleChange}
         
        //   value={formik.values.name} />
          value={values.name} />
        <br/>

        <span style={{color:'red'}}>{errors.name}</span> 
         <br/>
            
        
        <label htmlFor=''> Enter the Email: </label>
        <input type='text' name='Email' 
        //  onChange={formik.handleChange}
            onChange={handleChange}
         
         
        //   value={formik.values.email}  />
             value={values.email}  />
        <br/>

        <span style={{color:'red'}}>{errors.Email}</span> 
         <br/>
        
        <input type='submit' value= "submit"/>
        </form>
    </div>
  )
}

export default Formik01
