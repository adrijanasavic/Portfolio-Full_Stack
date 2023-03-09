import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routers";
import App from "../App";
import Home from "../pages/Home/Home"
import Qualifications from "../pages/Qualifications/Qualifications"
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <App />,
    children: [
      {
        path: routes.HOME.path,
        element: <Home />,
      },
      {
        path: routes.QUALIFICATIONS.path,
        element: <Qualifications />,
      },
      {
        path: routes.PROJECTS.path,
        element: <Projects />,
      },
      {
        path: routes.CONTACT.path,
        element: <Contact />,
      },
    ],
  },
]);

export default router;
