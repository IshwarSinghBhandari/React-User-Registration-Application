import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Compo3() {
  const { register,  formState: { isValid }, watch } = useForm();
  const [password, setPassword] = useState('');

  

  const pass = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    const inputData = { password: pass, confirmPassword: confirmPassword };
    localStorage.setItem('URP3', JSON.stringify(inputData));
  }, [pass, confirmPassword, ]);
 

  return (
<div className=" w-100 d-flex justify-content-center align-items-center " style={{height:"100vh",background:"#BE3144"}}>      
      <form  className="needs-validation container rounded p-3 w-50 bg-dark text-white">
      <h2 className="text-center mb-4">User Registration Process-Part3</h2>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
              },
            })}
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) => value === password || 'Passwords do not match',
            })}
            className="form-control"
          />
        </div>

        <div className="d-flex justify-content-end">
            {isValid ? (
            <Link to={'/Compo4'}><button className="btn btn-success ms-4 ps-4 pe-4">Next</button></Link>
          ) : (
            <button className="btn btn-danger ms-4 border ps-4 pe-4" disabled>Next</button>
          )}
        </div>          
      </form>
    </div>
  );
}
