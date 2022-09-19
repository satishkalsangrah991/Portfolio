import React ,{useState,useEffect}from 'react'
import './sing.css'

const SingForm = () => {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);

    //   setFormValues({
    //     username:"",email:'',password:""
    
    // })
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
  
    return (
      <>
      <div className="container-fuild bg-light">
      <div className='row m-5 col-8'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div className="m-2 text-primary fs-3 text-center col-12 bg-info w-75">Signed in successfully</div>
        ) : (
          <pre className='fs-4'>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
  
        <form onSubmit={handleSubmit}>
          <h1 className='col-9 offset-4'>Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form ">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
                className='form-control'
              />
            </div>
            <p className='text-danger'>{formErrors.username}</p>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                className='form-control'
              />
            </div>
            <p className='text-danger'>{formErrors.email}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                className='form-control'
              />
            </div>
            <p className='text-danger'>{formErrors.password}</p>
            <button className="btn btn-primary offset-5 mb-4">Submit</button>
          </div>
        </form>
        </div>
      </div>

      </>
    );
  }


export default SingForm