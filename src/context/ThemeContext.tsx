import React from 'react'

// For context, we MUST provide the default properties.
// The default properties are an object type similar to the initial state.
export const ThemeContext = React.createContext({
    isLightTheme: true, // Boolean
    light: { syntax: "#fff", ui: "#000", bg: "#aaa" },  //  Object
    dark: { syntax: "#fff", ui: "#000", bg: "#bbb" }, //  Object
});

export class ThemeContextProvider extends React.Component {
    state = {
        isLightTheme: true,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    };

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
};

