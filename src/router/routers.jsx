import { createBrowserRouter } from "react-router-dom";
import Listagemdexercicio from "../pages/listingexerciselocal";
import Listagemdelocais from "../pages/localexerciseuserst";
import App from "../App";
import Header from "../components/Header";
import Paginalogin from "../pages/login";
import Dashboard from "../pages/Dashboard";
import Locallisting from "../pages/listagemlocais";

const routers = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  children: [
   {
    path: "/login",
    element: <Paginalogin/>
   },
   {
    path: "/",
    element: <Dashboard/>
   },
   {
   path: "/CadastroLocais/:id?",
   element: <Listagemdexercicio/>
   },
   {
    path: "/CadastroUsuarios",
    element: <Listagemdelocais/>
    },
    {
      path: "/listalocais",
      element: <Locallisting/>
      }
  ]
 }
]);

export default routers;