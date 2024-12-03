import { Radio, RadioGroup, FormControl, FormLabel, Box, Button, Card, Checkbox, FormControlLabel, FormGroup, InputLabel, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
// import { TextareaAutosize } from '@mui/base/TextareaAutosize';

export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAccount, setIsAccount] = useState(false);



    const handlerFullName = (e) => {
        setName(e.target.value)

    }
    const handlerEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlerPassword = (e) => {
        setPassword(e.target.value)

    }
    const handleAccount = (e) => {
        setIsAccount(e.target.checked)
    }
    const onSubmit = () => {
        const signupdata = {
            name: name,
            email: email,
            password: password,
            isAccount: isAccount ? 1 : 0,
        }
        setName("")
        setEmail("")
        setPassword("")
        setIsAccount(false)
        console.log("submited", signupdata)
    }




    return <>

        <Card
            sx={{
                width: 600,
                gap: 1.5,
                margin: '150px auto 0',
                padding: 5,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 1,
                borderRadius: "10px",
            }} component={'form'}
        >
            <Typography variant="h4">Sign Up</Typography>
            <Box display={"flex"} gap={4}>
                <Box>
                    <InputLabel>Name</InputLabel>
                    <TextField value={name} onChange={handlerFullName} placeholder="Enter your name" />

                </Box>
                <Box>
                    <InputLabel>Middle Name</InputLabel>
                    <TextField value={name} onChange={handlerFullName} placeholder="Enter your name" />

                </Box>
                <Box>
                    <InputLabel>Last Name</InputLabel>
                    <TextField value={name} onChange={handlerFullName} placeholder="Enter your name" />

                </Box>
            </Box>

          <Box display={"flex"} gap={4}  >
            <Box>
            <InputLabel >Email</InputLabel>
            <TextField value={email} onChange={handlerEmail} placeholder="Enter your email" />            
          </Box>
          <Box>
          <InputLabel >Phone</InputLabel>
            <TextField placeholder="Enter your phone number" />
          </Box>
          <Box>
        <InputLabel>Password</InputLabel>
            <TextField value={password} onChange={handlerPassword} type="password" placeholder="Enter your password" />

        </Box>
          </Box>
          
          <FormControl >
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
           

            <Box  >
                <Typography variant="h6">Address</Typography>
                <InputLabel variant="p">Street Address</InputLabel>
                <TextField fullWidth />
                <InputLabel variant="p">Street Address Line 2</InputLabel>
                <TextField fullWidth />

                <Box sx={{ display: "flex", gap: 13.8 }} >
                    <Box>
                        <InputLabel variant="p">City</InputLabel>
                        <TextField sx={{ width: "120%" }} />
                    </Box>
                    <Box>
                        <InputLabel variant="p">State / Province</InputLabel>
                        <TextField sx={{ width: "120%" }} />
                    </Box>
                </Box>
                <InputLabel type="number" variant="p">Postal / Zip Code</InputLabel>
                <TextField />

            </Box>
            <Typography variant="h6">Comments, Questions, or Suggestions</Typography>
            <TextField multiline rows={4} variant="outlined" fullWidth />

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FormControlLabel control={<Checkbox checked={isAccount} onChange={handleAccount} />} />
                <Typography>Already have account ? <Link to={'/signin'}>Sign In</Link></Typography>
            </Box>
            <Box>
                <Button onClick={onSubmit} variant="contained" fullWidth>Sign Up</Button>
            </Box>



        </Card>
    </>
}