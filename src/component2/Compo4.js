import React from "react";

export default function Compo4() {
  var val1 = localStorage.getItem("URP1");
  var val2 = localStorage.getItem("URP2");
  var val3 = localStorage.getItem("URP3");

  var val11 = val1 ? JSON.parse(val1) : null;
  var val22 = val2 ? JSON.parse(val2) : null;
  var val33 = val3 ? JSON.parse(val3) : null;

  return (
<div className=" w-100 d-flex justify-content-center align-items-center " style={{height:"100vh",background:"#B15EFF"}}>      
      

      <div className="fs-4 w-75 container text-warning p-0 rounded ">
      <h2 className="text-center mb-4  text-white">User Registration Result</h2>
        {val11 && (
          <>
            <div className=" rounded bg-dark mb-1 p-2">Name: {val11.UserName}</div>
            <div className=" rounded bg-dark mb-1 p-2">Mobile: {val11.mobile}</div>
            <div className=" rounded bg-dark mb-1 p-2">Email: {val11.email}</div>
          </>
        )}

        {val22 && (
          <>
            <div className=" rounded bg-dark mb-1 p-2">Place: {val22.Place}</div>
            <div className=" rounded bg-dark mb-1 p-2">State: {val22.State}</div>
          </>
        )}

        {val33 && <div className=" rounded bg-dark mb-1 p-2">Password: {val33.password}</div>}

        {!val11 && !val22 && !val33 && (
          <div>No data available in local storage.</div>
        )}
      </div>
    </div>
  );
}
