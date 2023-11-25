import React from 'react'
import {useFormik} from 'formik'
import { FormSchema } from './FormSchema';

function Formik01() {

    const formInitialValues = {
        name: '',
        Email: '',
        Age: '',
        Pass: '',
        Cpass: ''
    }

    //  const formik = useFormik({

    //     initialValues : formInitialValues,
    //     onSubmit: (values) => {
    //         console.log(values);
    //         console.log(values.name);
    //         console.log(values.Email);
    //     }
    // });
    
    const {handleChange,handleSubmit,values, errors,  handleBlur, touched} = useFormik({

        initialValues : formInitialValues,
        validationSchema: FormSchema,

        onSubmit: (values,action) => {
            console.log(values);
            console.log(values.name);
            console.log(values.Email);
            console.log(values.Age);
            console.log(values.Pass);
            console.log(values.Cpass);
            action.resetForm();         // Reset form
        }
    });





  return (
    <div className='forming' >
        <h1>Formik demo</h1>
        
        {/* <form onSubmit={formik.handleSubmit}> */}
        <form onSubmit={handleSubmit}>

        <label htmlFor=''> Enter the Name: </label>
        <input type='text' name='name'
        //  onChange={formik.handleChange}
            onChange={handleChange}
            onBlur={handleBlur}
            

         
        //   value={formik.values.name} />
          value={values.name} />
        <br/>

        {/* <span style={{color:'red'}}>{errors.name}</span>  */}

        {
                errors.name && touched.name 
                ? ( <span style={{color:'red'}}>{errors.name}</span> )
                : null
         }
         <br/>
                  
            
        <label htmlFor=''> Enter the Email: </label>
        <input type='text' name='Email' 
        //  onChange={formik.handleChange}
            onChange={handleChange}
            onBlur={handleBlur}
         
        //   value={formik.values.Email}  />
             value={values.Email}  />
        <br/>

        {/* <span style={{color:'red'}}>{errors.Email}</span>  */}
        {
                errors.Email && touched.Email 
                ? ( <span style={{color:'red'}}>{errors.Email}</span> )
                : null
    
         }

         <br/>

         <label htmlFor=''> Enter the Age </label>
         <input type='number' name='Age' 
       
            onChange={handleChange}
            onBlur={handleBlur}
         
             value={values.Age}  />
        <br/>
       
        {
                errors.Age && touched.Age 
                ? ( <span style={{color:'red'}}>{errors.Age}</span> )
                : null           
         }
             <br/>
       
             <label htmlFor=''> Enter the Password </label>
             <input type='text' name='Pass' 
       
             onChange={handleChange}
             onBlur={handleBlur}
         
             value={values.Pass}  />
        <br/>
       
        {
                errors.Pass && touched.Pass 
                ? ( <span style={{color:'red'}}>{errors.Pass}</span> )
                : null           
         }
             <br/>

             
             <label htmlFor=''> Enter the Confirm Password </label>
             <input type='text' name='Cpass' 
       
             onChange={handleChange}
             onBlur={handleBlur}
         
             value={values.Cpass}  />
            <br/>
       
        {
                errors.Cpass && touched.Cpass 
                ? ( <span style={{color:'red'}}>{errors.Cpass}</span> )
                : null           
         }
             <br/>

        
        <input type='submit' value= "submit"/>
        </form>
    </div>
  )
}

export default Formik01
