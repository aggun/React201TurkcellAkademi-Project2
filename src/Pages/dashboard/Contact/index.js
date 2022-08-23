import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './Validations'
import {Button} from 'reactstrap'
import './style.css'

function Contact() {
  const { handleSubmit, handleChange, handleBlur, isSubmitting, errors, touched  } = useFormik({

    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);
      bag.resetForm();
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema,
  });


  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName"
            placeholder="Jane" disabled={isSubmitting}
            onChange={handleChange("firstName")} 
            onBlur={handleBlur('firstName')}
            />
          {errors.firstName && touched.firstName && <div className='error'>{errors.firstName}</div>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName"
            placeholder="Doe" disabled={isSubmitting}
            onChange={handleChange("lastName")} 
            onBlur={handleBlur('lastName')}
            />
          {errors.lastName && touched.lastName && <div className='error'>{errors.lastName}</div>}
        </div>

        <div>
          <label htmlFor="email">E-Mail</label>
          <input id="email" name="email" type="email"
            placeholder="example@examle.com" disabled={isSubmitting}
            onChange={handleChange("email")} 
            onBlur={handleBlur('email')}
            />
          {errors.email && touched.email && <div className='error'>{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="message">E-Mail</label>
          <textarea id="message" name="message"
            placeholder="Your message...." disabled={isSubmitting}
            onChange={handleChange("message")} 
            onBlur={handleBlur('message')}
            />
          {errors.message && touched.message && <div className='error'>{errors.message}</div>}
        </div>

        <Button color='succes' type="submit" disabled={isSubmitting} >Submit</Button>
      </form>


    </div>
  )
}

export default Contact