import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/header/Header";
import Home from "./components/Home";
import Opportunities from "./components/Opportunities";
import { HashRouter, Route } from "react-router-dom";
import DummyFooter from "./components/footer/DummyFooter";

import { Layout } from "antd";

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <Layout className="layout">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/opportunities" component={Opportunities}></Route>
          <DummyFooter />
        </Layout>
      </HashRouter>
    </Provider>
  );
}

export default App;
