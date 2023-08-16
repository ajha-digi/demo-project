import Home from "../pages/public";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminDasboard from "../pages/AdminDashboard";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PageNoteFound from "../pages/404";

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
  {
    path: "/about-us",
    Component: AboutUs,
    isProtected: false,
    isExact: true,
  },
  {
    path: "/contact-us",
    Component: ContactUs,
    isProtected: false,
    isExact: true,
  },
  {
    path: "*",
    Component: PageNoteFound,
    isProtected: false
  },
];
