import React from "react";
import ReactDOM from "react-dom";
import App from "App";
// Context
import AccountState from "context/Account/AccountState";

ReactDOM.render(
  <React.StrictMode>
    <AccountState>
      <App />
    </AccountState>
  </React.StrictMode>,
  document.getElementById("root")
);
