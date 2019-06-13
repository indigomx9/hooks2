import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export class BookList extends React.Component {
    // Add context to this class.
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <main 
                className="book__list" 
                style={{
                    color: theme.syntax,
                    background: theme.bg
                }}>
                <ul>
                    <li style={{ background: theme.ui }}>the way of kings</li>
                    <li style={{ background: theme.ui }}>the name of the wind</li>
                    <li style={{ background: theme.ui }}>the final empire</li>
                </ul>
            </main>
        );
    }
};

