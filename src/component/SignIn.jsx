import { Link } from "react-router-dom"
import { Card, InputLabel, TextField, FormControl, Checkbox, FormControlLabel, FormGroup, Button, Typography, Box } from "@mui/material"
import { useState } from "react"
export const SignIn = () => {
    /* const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [remember,setRemeber]=useState("");
    const handleRemeberCheck = (e)=>{
       setRemeber(e.target.checked)
       
    }
    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
        
    } 
    const handlePasswordChange =(e)=>{
        setPassword(e.target.value)
    }
  const handleSubmit =()=>{
    const signinData = {
        email:email,
        pass:password,
        check:remember?1:0,
    }
    console.log(signinData)
  } */
    const [signinData, setSigninData] = useState({
        email: "",
        password: "",
        isRemember: false,
    })
    const handleChange = (e) => {
        console.log("event", e.target.type); // e.target(type, name, value, checked, id, class, etc... )
        if (e.target.type === "checkbox") {
            setSigninData(prevState => ({ //callback func->arg as prevstate
                ...prevState, //spread to store prev data
                [e.target.name]: e.target.checked //set value by name(dynamically)
            }))
        }
        else {
            setSigninData(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }
    }
    const handleSubmit = () => {
        console.log(signinData, "data");
        setSigninData({
            email: "",
            password: "",
            isRemember: false,
        })

    }
    console.log("signinData", signinData);

    return <>
        <Card sx={{
            width: 350,
            height: 450,
            gap: 1.5,
            margin: '150px auto 0',
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 1,
            borderRadius: "10px",

        }} component="form" >

            <Typography variant="h4" fontWeight={"bold"}>Sign In</Typography>
            <InputLabel sx={{ fontSize: 14 }}>Email</InputLabel>
            <TextField name="email" value={signinData.email} onChange={handleChange} sx={{}} placeholder="Enter Your Email " />
            <InputLabel sx={{ fontSize: 14 }}>Password</InputLabel>
            <TextField name="password" value={signinData.password} onChange={handleChange} type="password" placeholder="Password" />
            <FormGroup>
                <FormControlLabel control={<Checkbox
                    name="isRemember"
                    onChange={handleChange}
                    checked={signinData.isRemember}
                />} label="Remember me" />
            </FormGroup>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: 1 }}>
                <Button onClick={handleSubmit} fullWidth variant="contained">Sign In</Button>
                <Typography component={Link}>Forgot your password ?</Typography>
                <Typography variant="p">---or---</Typography>
                <Typography>Don't have an account? <Link to={'/signup'}>Sign up</Link></Typography>
            </Box>
        </Card>
    </>
}