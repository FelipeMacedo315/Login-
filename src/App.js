import { Fragment, useState } from "react";
import "./App.css";
import Offer from "./componentes/offer";
import Text from "./componentes/text";
import Inputs from "./componentes/inputs";
import MyContext from "./componentes/context";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [classFirstName, setClassFirstName] = useState("dataValid");
  const [classLastName, setClassLastName] = useState("dataValid");
  const [classEmail, setClassEmail] = useState("dataValid");
  const [classPassword, setClassPassword] = useState("dataValid");
  const [erroMsg, setErroMsg] = useState({
    firstNameErro: "",
    lastNameErro: "",
    emailErro: "",
    passwordErro: "",
  });

  return (
    <Fragment>
      <MyContext.Provider value={{ data, setData }}>
        <div className="App">
          <div id="text">
            <Text />
          </div>
          <div id="formulario">
            <Offer />
            <form>
              <Inputs
                type="text"
                placeholder={"First Name"}
                className={classFirstName}
                textError={erroMsg.firstNameErro}
              />
              <Inputs
                type="text"
                placeholder={"Last Name"}
                className={classLastName}
                textError={erroMsg.lastNameErro}
              />
              <Inputs
                type="email"
                placeholder={"Email Address"}
                className={classEmail}
                textError={erroMsg.emailErro}
              />
              <Inputs
                type="password"
                placeholder={"Password"}
                className={classPassword}
                textError={erroMsg.passwordErro}
              />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(data);
                  if (data.firstName.length === 0) {
                    setClassFirstName("dataInvalid");
                    erroMsg.firstNameErro = "First Name cannot be empty";
                  } else {
                    setClassFirstName("dataValid");
                    erroMsg.firstNameErro = "";
                  }
                  if (data.lastName.length === 0) {
                    setClassLastName("dataInvalid");
                    erroMsg.lastNameErro = "Last Name cannot be empty";
                  } else {
                    setClassLastName("dataValid");
                    erroMsg.lastNameErro = "";
                  }
                  if (data.email.length === 0 || data.email.indexOf('@')===-1 || data.email.indexOf('.')===-1)  {
                    setClassEmail("dataInvalid");
                    erroMsg.emailErro = "Looks like this is not an email";
                  } else {
                    setClassEmail("dataValid");
                    erroMsg.emailErro = "";
                  }
                  if (data.password.length === 0) {
                    setClassPassword("dataInvalid");
                    erroMsg.passwordErro = "Password cannot be empty";
                  } else {
                    setClassPassword("dataValid");
                    erroMsg.passwordErro = "";
                  }
                }}
              >
                CLAIM YOUR FREE TRIAL
              </button>
              <p>
                By clicking the button, you are agreeing to our &nbsp;
                <span>Terms and Services</span>
              </p>
            </form>
          </div>
        </div>
      </MyContext.Provider>
    </Fragment>
  );
}

export default App;
