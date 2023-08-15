import Home from "../pages/public";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminDasboard from "../pages/AdminDashboard";

export const routes = [
  {
    path: "/",
    Component: Home,
    isProtected: false,
    isExact: true,
  },
  {
    path: "/login",
    Component: Login,
    isProtected: false,
    isExact: true,
  },
  {
    path: "/register",
    Component: Registration,
    isProtected: false,
    isExact: true,
  },
  {
    path: "/admin-dashboard",
    Component: AdminDasboard,
    isProtected: true,
    isExact: true,
  },
];
