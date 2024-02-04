import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';



export default function Compo2(props) {
  const { register,  formState: { errors, isValid }, watch } = useForm();

  const Place = watch("Place");
  const State = watch("State");


  useEffect(() => {
    const inputData = { Place: Place, State: State };
    localStorage.setItem('URP2', JSON.stringify(inputData));
  }, [Place, State, ]);


  return (
    <div className="d-flex justify-content-center align-items-center  w-100 " style={{height:"100vh",background:"#BE3144"}}>
      
      <form className="needs-validation container rounded  p-3 w-50 bg-dark text-white">
      <h2 className="text-center mb-4">User Registration Process-Part2</h2>
        <div className="mb-3">
          <label  className="form-label">Place</label>
          <input {...register("Place", { required: true, maxLength: 20, minLength: 2 })} type="text" className="form-control" />
          {errors.Place && <span className="text-warning">This field is required !</span>}
        </div>

        <div className="mb-3">
          <label  className="form-label">State</label>
          <input {...register("State", { required: true, maxLength: 20, minLength: 2 })} type="text" className="form-control" />
          {errors.State && <span className="text-warning">State field is required !</span>}
        </div>

        
          <div className="d-flex justify-content-end">
            {isValid ? (
              <Link to={'/Compo3'}><button className="btn btn-success ms-4 ps-4 pe-4">Next</button></Link>
            ) : (
              <button className="btn btn-danger ms-4 border ps-4 pe-4" disabled>Next</button>
            )}

          </div>
      </form>
    </div>
  );
}
