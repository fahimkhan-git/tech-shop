import { Typography } from "@mui/material"
export const Heading = (props) =>{
    return (
        <Typography paddingLeft={2.5} paddingTop={3} variant="h5">{props.text}</Typography>
    )
}
