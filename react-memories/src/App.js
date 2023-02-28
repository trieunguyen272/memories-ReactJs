import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

import PostDetails from "./components/PostDetails/PostDetails";
const user = JSON.parse(localStorage.getItem("profile"));

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="*" exact element={<Navigate to="/memories" />} />
          <Route path="/memories" element={<Home />} />
          <Route path="/memories/search" element={<Home />} />
          <Route path="/memories/:id" element={<PostDetails />} />
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/memories" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
