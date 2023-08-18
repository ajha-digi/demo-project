import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminDasboard from "../pages/AdminDashboard";
import PageNoteFound from "../pages/404";
import Preview from "../components/Preview";

export const routes = [
  {
    path: "/",
    Component: AdminDasboard,
    isProtected: true,
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
  {
    path: "/admin-dashboard/preview/:page",
    Component: Preview,
    isProtected: false,
    isExact: true,
  },
  {
    path: "*",
    Component: PageNoteFound,
    isProtected: false
  },
];
