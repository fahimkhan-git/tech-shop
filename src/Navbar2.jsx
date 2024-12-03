import { AppBar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
export const Navbar2 =()=>{
    return <>
    <AppBar sx={{flexDirection:"row",marginTop:"60px",height:"40px",boxShadow:"0 2px 3px -1px rgba(0, 0, 0, 0.1);",
        backgroundColor:"white",justifyContent:"center",gap:8, padding:"10px 100px",fontSize:"14px"}}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/smartphone"}>Smartphone</NavLink>
        <NavLink to={"/earbuds"}>Earbuds</NavLink>
        <NavLink to={"/smartwatch"}>Smartwatch</NavLink>
        <NavLink to={"/tablet"}>Tablet</NavLink>
        <NavLink to={"/cover"}>Cover</NavLink>
        
    </AppBar>
    </>
}