import React from "react";
import { Route, Routes } from "react-router-dom";
import SingleClubPage from "../pages/SingleClub";
import { routesData } from "./Routes.data";

const RoutesWrapper = () => {
  return (
    <Routes>
      {routesData.map((r, i) => (
        <Route path={r.path} element={r.element} key={i} />
      ))}
      <Route path="/clubs/:clubId" element={<SingleClubPage />} />
      <Route
        path="*"
        element={
          <h1 style={{ margin: 100, textAlign: "center", color: "#fff" }}>
            404 | page not found
          </h1>
        }
      />
    </Routes>
  );
};

export default React.memo(RoutesWrapper);
