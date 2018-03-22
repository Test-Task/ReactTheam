import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import reduxThunk from 'redux-thunk';

import "assets/css/material-dashboard-react.css";

import indexRoutes from "routes/index.jsx";
import Login from './views/Auth/Login.jsx';
import reducers from './reducers';

const hist = createBrowserHistory();
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path='/' exact={true} component={Login} />
      {indexRoutes.map((prop, key) => {
        debugger
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router></Provider>,
  document.getElementById("root")
);
