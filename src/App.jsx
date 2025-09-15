import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/home'
import Login from "./component/register&login/login";
import Signup from "./component/register&login/signup";
import Layout from "./common/layout";
import ProductsDetials from "./component/products/productsDetials";
import { Products } from "./component/products/products";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  
import Profile from "./component/profile/profile";
import Error from "./component/error";
import Handle from "./component/products/handle";


function App() {

  return (
    
        <BrowserRouter basename="/E-commerce-platform">
          <ToastContainer/>

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
               <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="/products" element={<Products />} />
              <Route path="/handle" element={<Handle />} />
              <Route path="/products/:id" element={<ProductsDetials />} />
              <Route path="*" element={<Error/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
   
  );
}

export default App;
