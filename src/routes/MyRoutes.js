import React from "react";
import { Routes, Route } from "react-router-dom";
import KlCard from "../components/KlCard";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<KlCard />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
