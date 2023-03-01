import "./App.css";
import { BrowserRouter, Link, Outlet, useRoutes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);

  return routes;
};

export default App;
