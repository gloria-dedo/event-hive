import { createBrowserRouter,RouterProvider } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ViewCollege from "./pages/ViewCollege";
import ViewEvent from "./pages/ViewEvent";
import CreateEvent from "./pages/CreateEvent";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

const eventHiveRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/view-event',
    element: <ViewEvent/>
  },
  {
    path: '/view-college',
    element: <ViewCollege/>
  },
  {
    path: '/create-event',
    element: <CreateEvent/>
  },
  {
    path: '*', 
    element: <NotFound/>
  }



]);

export default function App(){
  return(
    <>
    <RouterProvider  router={eventHiveRouter}/>
    </>
  )

}