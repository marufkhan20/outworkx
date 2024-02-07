import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import SpaceDetails from "./pages/SpaceDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spaces/:id" element={<SpaceDetails />} />
      </Routes>
    </>
  );
};

export default App;
