import React from "react";
import { Navbar } from "../containers/Navbar";
import { BookList } from "../components/BookList";
import "./App.css";

export const App = () => (
    <main className="App">
        <h1 className="banner">Hooks</h1>
        <Navbar />
        <BookList />
    </main>
);

