import React, { Fragment, useContext, useEffect } from "react";
import MyContext from "./context";

function Inputs(props) {
  const { data, setData } = useContext(MyContext);

  return (
    <Fragment>
      <input
        className={props.className}
        type={props.type}
        placeholder={props.name}
        onChange={(d) => {
          if (props.name === "First Name") {
            data.firstName = d.target.value;
          }
          if (props.name=== "Last Name") {
            data.lastName = d.target.value;
          }
          if (props.name === "Email Address") {
            data.email = d.target.value;
          }
          if (props.name === "Password") {
            data.password = d.target.value;
          }
        }}
      /> 
       <p id='errorMsg'><i>{props.textError}</i></p>
      
    </Fragment>
  );
}
export default Inputs;
