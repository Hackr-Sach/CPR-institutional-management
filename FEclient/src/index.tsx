import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { TryOutAvalancheJs } from "./avalanche_examples/workingWithAvalancheJS";
import { Provider } from "react-redux";

const appId = process.env.REACT_APP_MORALIS_APP_ID!;
const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL!;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <BrowserRouter>
          <Switch>
            {/* <div id="app-wrapper"> */}
            <Route exact path="/" component={App}/>
            <Route exact path="/test" component={TryOutAvalancheJs}/>
            {/* </div> */}
          </Switch>
        </BrowserRouter>
      </MoralisProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
