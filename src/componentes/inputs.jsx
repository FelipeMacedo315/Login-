import React, { Fragment, useContext, useEffect } from "react";
import MyContext from "./context";

function Inputs(props) {
  const { data, setData } = useContext(MyContext);

  return (
    <Fragment>
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(d) => {
          if (props.placeholder === "First Name") {
            data.firstName = d.target.value;
          }
          if (props.placeholder === "Last Name") {
            data.lastName = d.target.value;
          }
          if (props.placeholder === "Email Address") {
            data.email = d.target.value;
          }
          if (props.placeholder === "Password") {
            data.password = d.target.value;
          }
        }}
      /> 
       <p id='errorMsg'><i>{props.textError}</i></p>
      
    </Fragment>
  );
}
export default Inputs;
