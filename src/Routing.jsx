import { Routes,Route } from "react-router-dom"

import { Typography } from "@mui/material"
import { Home } from "./component/Home"
import { Smartphone } from "./component/Smartphone"
import { Earbuds } from "./component/Earbuds"
import { Smartwatch } from "./component/Smartwatch"
import { Tablet } from "./component/Tablet"
import { Cover } from "./component/Cover"
import { SearchingProduct } from "./component/SearchingProduct"
import { SignUp } from "./component/SignUp"
import { SignIn } from "./component/SignIn"

export const Routing =()=>{
    return <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/smartphone" element={<Smartphone/>}/>
    <Route path="/earbuds" element={<Earbuds/>}/>
    <Route path="/smartwatch" element={<Smartwatch/>}/>
    <Route path="/tablet" element={<Tablet/>}/>
    <Route path="/cover" element={<Cover/>}/>
    <Route path="/SearchingProduct" element={<SearchingProduct/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
   </Routes>
    </>
}