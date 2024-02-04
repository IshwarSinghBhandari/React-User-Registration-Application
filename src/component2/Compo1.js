

import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Compo1() {
  const { register, formState: { errors, isValid }, watch } = useForm();


  const userName = watch("UserName");
  const mobile = watch("mobile");
  const email = watch("email");

  React.useEffect(() => {
    const inputData = { UserName: userName, mobile: mobile, email: email };
    localStorage.setItem('URP1', JSON.stringify(inputData));
  }, [userName, mobile, email]);

  return (
<div className=" w-100 d-flex justify-content-center align-items-center " style={{height:"100vh",background:"#872341"}}>      
      <form className="needs-validation container rounded p-3 w-50  text-white bg-dark">
      <h2 className="text-center mb-4">User Registration Process-Part1</h2>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">User Name</label>
          <input {...register("UserName", { required: true, maxLength: 30, minLength: 2 })} type="text" className="form-control" />
          {errors.UserName && <span className="text-warning">This field is required!</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input {...register("mobile", { required: true, maxLength: 10, minLength: 10 })} type="number" className="form-control" />
          {errors.mobile && <span className="text-warning">Enter Valid Mobile Number!</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Email</label>
          <input  {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })} type="email" className="form-control" />
          {errors.email && <span className="text-warning">Enter Valid Email!</span>}
        </div>


      <div className="d-flex justify-content-end">
            
             {isValid ? (
            <Link to={'/Compo2'}><button type="submit" className="btn btn-success ms-4 ps-4 pe-4">Next</button></Link>
            ) : (
          <button  className="btn btn-danger ms-4 border ps-4 pe-4" disabled>Next</button>
        )} 
          </div>
      </form>
    </div>
  );
}
