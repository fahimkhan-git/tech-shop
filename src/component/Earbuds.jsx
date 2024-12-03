import { Typography } from "@mui/material"
import { Carousel } from "./Carousel"
import { EarbudsCard } from "./EarbudsCard"
import { earbuds_carousel_images } from "../data"
export const Earbuds =()=>{
    return <>
    <Carousel imageUrls={earbuds_carousel_images}/>
    <EarbudsCard/>
    <EarbudsCard/>
    <EarbudsCard/>
    </>
}