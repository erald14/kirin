import React from "react";

// import { Auth } from "aws-amplify";
const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor() {
    super();
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          config: this.props.config,
          data: this.props.data.al
        }}
      >
        <>{this.props.children}</>
      </AppContext.Provider>
    );
  }
}
const AppConusumer = AppContext.Consumer;

export { AppProvider, AppConusumer, AppContext };
