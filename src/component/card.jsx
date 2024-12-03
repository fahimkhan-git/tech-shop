import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


export const CardSection = (props) => {

  const navigate = useNavigate();
  const [buy,setBuy]=useState(false);
  const handleBuyNowClick = () =>{
    setBuy(true);
    navigate('/SearchingProduct')
  };
  const [cart,setCart]=useState(false);
  const handleAddToCart =(id, title)=>{
    console.log(title,"id.....",id);
    
    setCart(true);
    Navigate('/SearchingProduct')
  }
  
  const { img, heading, title, description,price,id } = props;

  return (
    <Grid container marginTop={5} marginBottom={4} spacing={2} justifyContent="center">
      <Grid item>
        <Card sx={{border:"0.5px solid #e6e6e6", boxShadow:'none'}}>
          <CardMedia
            sx={{ height: 140, backgroundSize: "contain" }}
            image={img}
            title={heading}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" fontWeight={"bold"}>
              {title}
            </Typography>
            <Typography variant="body2" color='grey'>
              {description}
            </Typography>
            <Typography variant="body2" fontWeight={"bold"}>
              Price {price} /-
            </Typography>
            
          </CardContent>
          <CardActions>
            <Button onClick={()=>handleAddToCart(id,title)} variant='outlined' size="small">Add to cart</Button>
            <Button onClick={handleBuyNowClick} variant='contained' size="small">Buy Now</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
