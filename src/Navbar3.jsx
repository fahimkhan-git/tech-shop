import { AppBar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
export const Navbar3 =()=>{
    return <>
    <AppBar  sx={{flexDirection:"row",marginTop:"60px",height:"40px",boxShadow:"0 2px 3px -1px rgba(0, 0, 0, 0.1);",
        backgroundColor:"white",justifyContent:"center",gap:8, padding:"10px 100px"}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/smartphone"}>Smartphone</Link>
        <Link to={"/earbuds"}>Earbuds</Link>
        <Link to={"/smartwatch"}>Smartwatch</Link>
        <Link to={"/tablet"}>Tablet</Link>
        <Link to={"/cover"}>Cover</Link>
        
    </AppBar>
    </>
}