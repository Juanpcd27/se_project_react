import React from "react";

const CurrentUserContext = React.createContext({
  userData: { _id: "", username: "", email: "", avatar: "", name: "" },
});

export { CurrentUserContext };
