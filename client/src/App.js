import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import { Protected } from "./routes/ProtectedRoutes";
import { routes } from "./routes";

import "./App.css";

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
      <footer className="navbar">
        Hi this is simple footer
      </footer>
    </div>
  );
}

export default App;
