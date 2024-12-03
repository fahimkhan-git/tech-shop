import { Box,Typography } from "@mui/material"
import { CardSection } from "./card"
import Slider from "react-slick";
import { Heading } from "./common/Heading";
import { CarousalWrapper } from "./CarousalWrapper";
import { useEffect, useState } from "react";

var watchImg= [
    {url:'https://www.maplestore.in/cdn/shop/files/Apple_Watch_SE_GPS_44mm_Midnight_Aluminium_Midnight_Sport_Band_PDP_Image_2023_Position-1__en-IN_7a3f1aee-0f02-4cf4-90da-f342aaa8bdc4.jpg?v=1701919922&width=823',
        title:'Apple Watch',
        description:'Price 45,000'
    },
    {url:'https://image-us.samsung.com/SamsungUS/samsungbusiness/mobile/wearables/smartwatches/gw-fe-pink-gold/SM-R861_001_Front_Pink_Gold_1600x1200.jpg',
        title:'Samsung Watch',
        description:'Price 27,000'
    },
    {url:'https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/c/a/u/41-ga05032-gb-android-google-no-original-imagtf3q2r7enkpf.jpeg?q=90&crop=false',
        title:'Pixel Watch',
        description:'Price 30,000'
    },
    {url:'https://image01.oneplus.net/ebp/202103/12/1-m00-21-ed-rb8bwmbk1tiauby9aafkb6ixcai979.png',
        title:'One Plus Watch',
        description:'Price 5,000'
    },
    {url:'https://www.maplestore.in/cdn/shop/files/Apple_Watch_SE_GPS_44mm_Midnight_Aluminium_Midnight_Sport_Band_PDP_Image_2023_Position-1__en-IN_7a3f1aee-0f02-4cf4-90da-f342aaa8bdc4.jpg?v=1701919922&width=823',
        title:'Apple Watch',
        description:'Price 45,000'
    },
    {url:'https://image-us.samsung.com/SamsungUS/samsungbusiness/mobile/wearables/smartwatches/gw-fe-pink-gold/SM-R861_001_Front_Pink_Gold_1600x1200.jpg',
        title:'Samsung Watch',
        description:'Price 27,000'
    },
    {url:'https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/c/a/u/41-ga05032-gb-android-google-no-original-imagtf3q2r7enkpf.jpeg?q=90&crop=false',
        title:'Pixel Watch',
        description:'Price 30,000'
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

  
export const SmartwatchCard =()=>{
  const [smartwatch,setSmartwatch]=useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products/category/smartphones")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setSmartwatch(data.products);
    })
  })
    return <>
    <Box marginTop={1} marginBottom={4} sx={{backgroundColor:"white"}}>
    <Heading text="Smartwatch" />
        <CarousalWrapper>
        {smartwatch.map((smartwatch,index)=>{
          const {id,thumbnail:src, price,title,description}=smartwatch;
            return (
                <CardSection
                key={id}
                img={src}
                // heading={data1.imageHeading}
                price={price}
                title={title}
                description="1 year"
                />
            )
        })}
        </CarousalWrapper>

    </Box>
    </>
}