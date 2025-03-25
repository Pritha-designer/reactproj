import { useState, useEffect } from "react";
import './App.css';
function App() {
  const initialValues = { username: "", email: "", password: "", address: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setisSubmit(true);
    setFormValues(initialValues);
  };

  useEffect(() => {
    console.log(FormErrors);
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [FormErrors, formValues, isSubmit]);


  const validate = (values) => {
    const errors = {};
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;


    if (!values.username) {
      errors.username = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }
    else if (!regex.test(values.email)) {
      errors.email = "Not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    else if ((!values.password.length > 8)) {
      errors.password = "Password should contain 8 characters ";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    else if ((!values.phone.length > 10)) {
      errors.phone = "Not a valid phone format";
    }
    return errors;
  };

  return (
   
    <div className="App">
      <div class="container" id="box">
        <br />
        {Object.keys(FormErrors).length === 0 && isSubmit ? (<div className="ui message success">Signed Successfully</div>)
          : (
            <pre>{JSON.stringify()}</pre>


            // <pre>{JSON.stringify(formValues, undefined,2)}</pre> 
          )
        }
        <form class="row g-3" id="myForm" onSubmit={handleSubmit}>
          <div class="col-md-12">
            <label for="name">User Name</label>
            <input
              type="text" class="form-control"
              name="username"
              placeholder="Enter User Name"
              value={formValues.username}
              onChange={handleChange} />
            <span>{FormErrors.username}</span>
          </div>


          <div class="col-md-12">
            <label for="email">Email</label>
            <input type="text" class="form-control"
              name="email"
              placeholder="Enter your emailid"
              value={formValues.email}
              onChange={handleChange} />
            <span>{FormErrors.email}</span>
          </div>


          <div class="col-md-12">
            <label for="password">Password</label>
            <input type="password" class="form-control"
              name="password" placeholder="Enter  your password"
              value={formValues.password}
              onChange={handleChange} />
            <span>{FormErrors.password}</span>
          </div>


          <div class="col-12">
            <label for="address">Address</label>
            <input type="text" class="form-control"
              name="address" placeholder="Enter  your Address"
              value={formValues.address}
              onChange={handleChange} />
            <span>{FormErrors.address}</span>
          </div>


          <div class="col-12">
            <label for="phone">Phone</label>
            <input type="phone" class="form-control"
              name="phone" placeholder="Enter  your Phone number"
              value={formValues.phone}
              onChange={handleChange} />
            <span>{FormErrors.phone}</span>
          </div>
          

          <div>
          <br/>
       
            <button type="submit" class="loginbtn">Sign Up</button>

          </div>

          <div class="txt">
            <p>Already have an account? <a href="#/">Login </a></p><br />
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
