import React from "react";
import AccountContext from "./AccountContext";

const AccountState = ({ children }) => {
  const [isLogged, setIsLogged] = React.useState(true);

  const handleLoginStatus = () => {
    setIsLogged(!isLogged);
  };

  return (
    <AccountContext.Provider
      value={{
        isLogged,
        handleLoginStatus,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountState;
