import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CardSection } from "./card";
import { Heading } from "./common/Heading";
import { CarousalWrapper } from "./CarousalWrapper";

export const SmartphoneCards = () => {
  const [smartphones, setSmartphones] = useState([]); //initial state

  // Fetch data from API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log("data", data);
        
        // Transform the API data to match the expected structure
        /* const transformedData = data.products.map((product) => ({
          url: product.thumbnail, // Use thumbnail as image URL
          title: product.title,
          description: `Price ${product.price}/-`, // Format price
         
        })); */
        setSmartphones(data.products); //updated value-> array of objects(details)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box marginTop={1} marginBottom={4} sx={{ backgroundColor: "white" }}>
      <Heading text="Smartphone" />
      <CarousalWrapper>
        {smartphones.map((smartphone, index) => {
          console.log("smartphone", smartphone);
          const {id, thumbnail: src, price, title, description} = smartphone;
          return (
            <CardSection
              key={id}
              img={src}
              // heading={imageHeading}
              price={price}
              title={title}
              description="1 year warranty"
              id={id}
            />
          );
        })}
      </CarousalWrapper> 
    </Box>
  );
};
