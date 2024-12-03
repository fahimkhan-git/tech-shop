import { AppBar, Typography, Box } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return <>
    <AppBar sx={{
      padding: "10px 100px", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
      height: "60px", boxSizing: "border-box", backgroundColor: "white",fontSize:"14px" ,color: "black",
      fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
    }}>
      <Box display={"flex"} alignItems={"center"}>
        <PhoneIphoneIcon />
        <Typography variant='4' mr={4}>TechShop</Typography>
        <LocationOnIcon />
        <Typography variant='p'>Deliver to mumbai 400701</Typography>
      </Box>




      <Paper component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          borderRadius:'10px',
          width: 400,
          height:32,
          boxShadow:'none',
          backgroundColor:'#f2f2f2'
        }}>

        <InputBase
          sx={{ ml: 2, flex: 1,fontSize:"14px" }}
          placeholder="Search Your Products"
          inputProps={{ 'aria-label': 'search google maps' }}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>




      <Box display={"flex"} alignItems={"center"} gap={3}>
        <ShoppingCartIcon />
   <Box display={"flex"} alignItems={"center"} gap={1}>
   <AccountCircleIcon />
        <Typography  component={Link} to={'/signin'} variant='p'>Sign in</Typography>
     
   </Box>
    </Box>

    </AppBar>
  </>
}