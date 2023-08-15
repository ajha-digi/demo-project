import React from "react";
import { Routes, Route } from "react-router-dom";
import { Protected } from "./routes/ProtectedRoutes";
import { routes } from "./routes";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map(({ path, Component, isProtected, isExact }) => (
          <Route
            key={path}
            exact={isExact}
            path={path}
            element={
              <Protected isProtected={isProtected}>
                <Component />
              </Protected>
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
