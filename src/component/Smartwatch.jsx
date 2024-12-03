import { Typography } from "@mui/material"
import { Carousel } from "./Carousel"
import { SmartphoneCards } from "./SmartphoneCards"
import { SmartwatchCard } from "./smartwatchcard"
import { smartphones_carousel_images } from "../data"
export const Smartwatch =()=>{
    return <>
    <Carousel imageUrls={smartphones_carousel_images}/>
    <SmartwatchCard/>
    <SmartwatchCard/>
    <SmartwatchCard/>
   
    </>
}