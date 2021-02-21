import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, HashRouter } from "react-router-dom";
import { SideMenu } from "./components/SideMenu";
import { GraphsPage } from "./pages/GraphsPage";
import { TablePage } from "./pages/TablePage";
import { store } from "./store";
import { Container } from "./style";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Container>
          <SideMenu />
          <Route exact path="/" component={TablePage} key={1} />
          <Route exact path="/graphs" component={GraphsPage} key={2} />
        </Container>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
