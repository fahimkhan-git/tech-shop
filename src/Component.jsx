
import React from "react"
import { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

export const card_data = [
    {
        url: 'https://www.leafstudios.in/cdn/shop/files/1_6b54ff34-acdd-40e6-a08a-f2bfa33a1c7a_800x.png?v=1718706988',
        title: "Leaf Earbuds",
        description: "Price 1000",
        abc:"xys"
    },
    {
        url: 'https://m.media-amazon.com/images/I/51pycg0MGxL.jpg',
        title: "Ipods Pro",
        description: "Price 27,000"
    },
    {
        url: 'https://images.samsung.com/is/image/samsung/p6pim/in/feature/164823955/in-feature-galaxy-bud2-pro-538435687?$624_n_JPG$',
        title: "Galaxy Buds 2 Pro",
        description: "Price 8000"
    },
    {
        url: 'https://m.media-amazon.com/images/I/41euJFXw5KL.jpg',
        title: "Pixel Buds Pro",
        description: "Price 15,000"
    },
    {
        url: 'https://www.leafstudios.in/cdn/shop/files/1_6b54ff34-acdd-40e6-a08a-f2bfa33a1c7a_800x.png?v=1718706988',
        title: "Leaf Earbuds",
        description: "Price 1000"
    },

    {
        url: 'https://www.leafstudios.in/cdn/shop/files/1_6b54ff34-acdd-40e6-a08a-f2bfa33a1c7a_800x.png?v=1718706988',
        title: "Leaf Earbuds",
        description: "Price 1000"
    },
    {
        url: 'https://images.samsung.com/is/image/samsung/p6pim/in/feature/164823955/in-feature-galaxy-bud2-pro-538435687?$624_n_JPG$',
        title: "Galaxy Buds 2 Pro",
        description: "Price 8000"
    },
    {
        url: 'https://m.media-amazon.com/images/I/41euJFXw5KL.jpg',
        title: "Pixel Buds Pro",
        description: "Price 15,000"
    },
]

const Shafique = (props) => {
    const details = {
        name:"fahim khan",
        age:30,
        email:"fahim@gmail.com"

    };
    console.log(props.skills)
    return <>
        <h1>My Name is : {props.name}</h1>
        <h3>My Mobile Number : {props.number}</h3>
        <h3>im salried or selfemployed : {props.work ? "salried" : "selfemployeed"}</h3>
        <h3>my skills are : </h3>
        <ul>
            {props.skills.map((curr) => {
                return (<li>{curr}</li>)
            })

            }
        </ul>
        <img src={props.img} alt="" height={250} width={450} />

    </>
}

const CardComp = (props) => {
    return <>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140, backgroundSize: "contain" }}
                image={props.img}
                title="green iguana"

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button variant="outlined" size="small">buy now</Button>
            </CardActions>
        </Card>
    </>
}

const Shamim = () => {
    const [name, setName] = useState("")
    const handlerName = (e) => {
        setName(e.target.value)
    }

    return <>
        <input onChange={handlerName} value={name} />
        <button>Click Me</button>

        <Shafique name={name} number={8779595058} work={true} skills={["html", " react"]} details={details} />
        <Box display={"flex"} gap={4} mt={5} border={"1px solid black"}>
            {card_data.map(currElm => {
                return (
                    <CardComp
                        img={currElm.url}
                        title={currElm.title}
                        description={currElm.description}
                    />
                )
            }
            )}
        </Box>
    </>
}
export default Shamim;

