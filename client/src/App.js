import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import { Protected } from "./routes/ProtectedRoutes";
import { routes } from "./routes";

import "./App.css";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
