import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/:id" Component={DetailPage} />
      </Routes>
    </BrowserRouter>
  );
}
