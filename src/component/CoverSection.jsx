import { Box,Typography } from "@mui/material"
import { CardSection } from "./card"
import Slider from "react-slick";
import { Heading } from "./common/Heading";
import { CarousalWrapper } from "./CarousalWrapper";

var coverData = [{
    url: 'https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-stride-2-0-clear-magsafe-phone-case-cover-for-iphone-13-images/DailyObjects-Stride-2-0-Clear-MagSafe-Phone-Case-Cover-For-iPhone-13.png?tr=cm-pad_resize,v-3,w-412,h-490,dpr-2,q-60',
    title: 'Apple 15 back cover',
    description: 'Price 500'
},
{
    url: 'https://www.onezeros.in/cdn/shop/files/code-logo-leather-finish-phone-case-for-samsung-galaxy-a55-5g-mobile-cover-onezeros-in-36964980195526.jpg?v=1722549247',
    title: 'Samsung coevrs',
    description: 'Price 800'
},
{
    url: 'https://www.kssshop.com/cdn/shop/files/Oneplus8tsiliconecase-Blue_600x_584d72f0-da83-43de-bea7-ae0c2e624fb1_1.jpg?v=1723552816&width=2048',
    title: 'One Plus cover',
    description: 'Price 250'
},
{
    url: 'https://shoponcliq.com/cdn/shop/products/Pink-Bunny-Glass-Case-Cover-For-Redmi-Xiaomi-ShopOnCliQ-806.jpg?v=1723742917&width=1946',
    title: 'Xiaomi cover',
    description: 'Price 600'
},
{
    url: 'https://www.sbsmobile.com/let/263903-thickbox_default/skinny-cover-for-realme-12-pro-plus-realme-12-pro.jpg',
    title: 'Realme 12 cover',
    description: 'Price 400'
},
{
    url: 'https://symlcart.com/wp-content/uploads/2024/05/Motorola_Edge_50_Pro_5G_Back_Cover_blue.png',
    title: 'Moto edge 50 cover',
    description: 'Price 300'
},


]



var settings = {
  // dots: true,
  infinite: true,
  speed: 1000,
  autoPlaySpeed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoPlay:true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const CoverSection = () => {
  return <>
      <Box marginTop={1} marginBottom={4} sx={{backgroundColor:"white"}}>
    <Heading text="Covers" />
        <CarousalWrapper>
        {coverData.map((data1,index)=>{
            return (
                <CardSection
                key={data1.url}
                img={data1.url}
                heading={data1.imageHeading}
                title={data1.title}
                description={data1.description}
                />
            )
        })}
        </CarousalWrapper>

    </Box>
  </>
}