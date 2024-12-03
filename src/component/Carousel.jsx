import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Image URLs for all slides


export const Carousel = (props) => {
    console.log("CarouselSection rendered",props);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
    <Box sx={{width: "95%", margin: "0 auto",paddingTop:1}}>

    <Slider {...settings}>
        {props.imageUrls&&props.imageUrls.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              style={{
                backgroundSize: "contain" ,
                width: "100%",
                maxWidth: "100%",
                borderRadius: "20px",
                maxHeight: "500px",
                objectFit: "cover"
              }}
            />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: "20px",
                left: "20px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "5px 10px",
                borderRadius: "5px"
              }}
            >
              {`Slide ${index + 1}`}
            </Typography>
          </div>
        ))}
      </Slider>
      </Box>

  );

};
