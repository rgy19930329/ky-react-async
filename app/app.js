import "./global.less";
import React from "react";
import { render } from "react-dom";
import App from "./pages/index";
import { AppContainer } from "react-hot-loader";

const toRender = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("app")
  );
}

// render(<App /> , document.getElementById("app"));

// if (module.hot) {
//   module.hot.accept();
// }

toRender(App);

if (module.hot) {
  module.hot.accept("./pages/index", () => {
    toRender(App);
  });
}