import { Fragment } from "react";
import "./App.css";
import Offer from "./componentes/offer";
import Text from "./componentes/text";
import Inputs from "./componentes/inputs";
function App() {
  return (
    <Fragment>
      <div className="App">
        <div id="text">
          <Text />
        </div>
        <div id="formulario">
          <Offer />
          <form>
            <Inputs type="text" placeholder={"First Name"} />
            <Inputs type="text" placeholder={"Last Name"} />
            <Inputs type="email" placeholder={"Email Address"} />
            <Inputs type="password" placeholder={"Password"} />
            <button onClick={(e)=>{
               e.preventDefault()
            }}>CLAIM YOUR FREE TRIAL</button>
            <p>
              By clicking the button, you are agreeing to our &nbsp;
              <span>Terms and Services</span>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
