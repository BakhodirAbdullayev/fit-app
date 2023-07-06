import { ReactNode } from "react";
import ClubsPage from "../pages/Clubs";
import Home from "../pages/Home";

interface RoutesType {
  path: string;
  name: string;
  element: ReactNode;
}
export const routesData: RoutesType[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/categories",
    name: "Categories",
    element: <h1 style={{ marginTop: 100, color: "#fff" }}>Categories</h1>,
  },
  {
    path: "/clubs",
    name: "Clubs",
    element: <ClubsPage />,
  },

  {
    path: "/blog",
    name: "Blogs",
    element: <h1 style={{ marginTop: 100, color: "#fff" }}>Blogs</h1>,
  },
  {
    path: "/contact",
    name: "Contact",
    element: <h1 style={{ marginTop: 100, color: "#fff" }}>Contact</h1>,
  },
];
