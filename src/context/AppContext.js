import React, { Component } from "react";

// import { Auth } from "aws-amplify";
const AppContext = React.createContext();


class AppProvider extends Component {
  state = {
    language: "al",
    setLanguage: this.setLanguage
  };

  setLanguage = language => {
    this.setState({ language });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          config: this.props.config,
          data: this.props.data[this.state.language],
          language: this.state.language,
          setLanguage: this.setLanguage
        }}
      >
        <>{this.props.children}</>
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
