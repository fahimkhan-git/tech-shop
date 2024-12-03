import { Navbar } from "./Navbar"
import { Navbar2 } from "./Navbar2"
import { Box } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import { Routing } from "./Routing";
import './App.css'
import { SearchingProduct } from "./component/SearchingProduct";
export const App =()=>{
  return <>
  <BrowserRouter future={{v7_startTransition:true, v7_relativeSplatPath:true}}>
  <Navbar/>
  <Navbar2/>
  
  <Box sx={{marginTop:"100px"}}>
  <Routing/>
  </Box>
  {/* <SearchingProduct/> */}
 
  </BrowserRouter>
  </>
}