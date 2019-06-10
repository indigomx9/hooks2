import React from "react";
import { Navbar } from "../containers/Navbar";
import { BookList } from "../components/BookList";
import "./App.css";
import { ThemeContextProvider } from "../context/ThemeContext";

export const App = () => (
    <main className="App">
        <ThemeContextProvider>
            <h1 className="banner">Hooks</h1>
            <Navbar />
            <BookList />
        </ThemeContextProvider>
    </main>
);

