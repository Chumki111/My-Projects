import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
// import Home from "../Pages/Home/Home";
// import AllShoes from "../Pages/AllShoes/AllShoes";

const Router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      // children:[
      //   {
      //       path:'/',
      //       element:<Home/>
      //   },
      //   {
      //       path:'/allShoes',
      //       element:<AllShoes/>
      //   }
      // ]
    },
  ]);
  export default Router;