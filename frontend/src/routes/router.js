import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import App from "../App";
import Home from "../pages/Home/Home.jsx";
import Qualifications from "../pages/Qualifications/Qualifications";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Users from "../components/Users/Users";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import { Navigate } from "react-router-dom";

import FormAddProject from "../components/Forms/FormAddProject";
import FormAddQualification from "../components/Forms/FormAddQualification";
import FormEditProject from "../components/Forms/FormEditProject";

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
        path: routes.QUALIFICATION.path,
        element: <FormAddQualification />,
      },
      {
        path: routes.PROJECTS.path,
        element: <Projects />,
      },
      {
        path: routes.PROJECT.path,
        element: <FormAddProject />,
      },
      {
        path: routes.EDITPROJECT.path,
        element: <FormEditProject />,
      },
      {
        path: routes.CONTACT.path,
        element: <Contact />,
      },
      {
        path: routes.USERS.path,
        element: <Users />,
      },
      {
        path: routes.DASHBOARD.path,

        element: (
          <UserProtect>
            <Dashboard />
          </UserProtect>
        ),
      },

      {
        path: routes.LOGIN.path,
        element: <Login />,
      },
    ],
  },
]);

function UserProtect({ children }) {
  if (localStorage.hasOwnProperty("user")) {
    return children;
  }
  return <Navigate to="/login" />;
}
export default router;
