import React from "react";
import Registration from "./pages/Registration"
import "./App.css";
import Login from "./pages/Login";
import AdminDasboard from "./pages/AdminDashboard";


function App() {

  return (
    <div>
      <Registration />
      <Login />
      <AdminDasboard />
    </div>
  );
}

export default App;
