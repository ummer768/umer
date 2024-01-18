import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Post from "./components/Post";
import Listing from "./components/Listing";

const Router2 = () => {

    return (
        <Routes>
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/post" Component={Post} />
            <Route path="/listing" Component={Listing} />
        </Routes>
    );
};

export default Router2;