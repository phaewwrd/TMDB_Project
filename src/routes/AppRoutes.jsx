import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../page/Home";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
