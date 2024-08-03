import React from "react";
import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import { ContactPage } from "./Pages/ContactPage";
import { ContactsList } from "./Pages/ContactsList";
import { NotFound } from "./Pages/NotFound";

const App = () => {

  const Root = () => {
    return (
      <div className="container relative h-[100vh] py-3 ">
            <Outlet />
      </div>
      );
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<ContactsList/>} />
        <Route path='/:id' element={<ContactPage/>} errorElement={<NotFound/>}/>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  
  return (
     <RouterProvider router={router} />
  ) 
};

export default App;
