import { Fragment } from "react";
import "./App.css";
import Offer from "./componentes/StylesComponents/offer";
import GlobalStyle from "./componentes/StylesComponents/globalStyle";
import Text from "./componentes/text";
import Inputs from "./componentes/inputs";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <Text />
        <Offer />
        <form>
          <Inputs type="password" placeholder={'Password'} />
        </form>
      </div>
    </Fragment>
  );
}

export default App;
