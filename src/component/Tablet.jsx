import { Box, Typography } from "@mui/material"
import { CardSection } from "./card"
import Slider from "react-slick";
import { Carousel } from "./Carousel";
import { TabletSection } from "./TabletSection";
import { tablet_carousel_images } from "../data";



export const Tablet = () => {

    return <>
    <Carousel imageUrls={tablet_carousel_images}/>
    <TabletSection/>
    <TabletSection/>
    <TabletSection/>
    </>
}