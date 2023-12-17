import React, { useState,useEffect} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/Signupstyle.css';
export default function Inputs() {
    const initialValues={username:"",email:"",password:""};
    const[formValues,setFormValues]=useState(initialValues);
    const[formErrors,setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);

    const handlechange=(event)=>{
        const{name,value}=event.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
       event.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    }

    useEffect(()=>{
      console.log(formErrors)
      if(Object.keys(formErrors).length ===0 && isSubmit){
        console.log(formValues);
      }
    }, [formErrors]);

    const validate=(values)=>{
        const errors={};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username="username is required";
        }
        if(!values.email){
            errors.email="email is required";
        }
        if(!values.password){
            errors.password="password is required";
        }
        return errors;
    };
  return (
    <>
    <Navbar />
    <div className='container'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="result">Signed in successfully</div>):(        <pre>{JSON.stringify(formValues,undefined,2)}</pre>
         )}
       
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
            <div className='field'>
                <label>UserName</label><br></br>
                <input type="text" name="username" placeholder='Username' values={formValues.username} onChange={handlechange} />
            </div>
            <p>{formErrors.username}</p>
            <div className='field'>
                <label>Email</label><br></br>
                <input type="email" name="email" placeholder='Email' values={formValues.email} onChange={handlechange}/>
            </div>
            <p>{formErrors.email}</p>
            <div className='field'>
                <label>Password</label><br></br>
                <input type="password" name="password" placeholder='Password'  values={formValues.password} onChange={handlechange}/>
            </div>
            <p>{formErrors.password}</p>
            <button className="fluid">Submit</button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  )
}