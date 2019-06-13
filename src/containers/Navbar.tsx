import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export class Navbar extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return(
                    <nav style={{ 
                        background: theme.ui,
                        color: theme.syntax
                    }}>
                        <h1>Context Api</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}</ThemeContext.Consumer>
        );
    }
};

