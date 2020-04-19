import React, { Component } from "react";

import { AppContext } from "../../../context/AppContext";
import { languageOptions } from "../../../data";

class LanguageSwitch extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ language, setLanguage }) => (
                    <>
                        <select onChange={(e) => setLanguage(e.target.value)}>
                            {languageOptions.map(el => <option key={el.id} value={el.id}>{el.text}</option>)}
                        </select>
                    </>
                )}
            </AppContext.Consumer>
        );
    }
}

export default LanguageSwitch;