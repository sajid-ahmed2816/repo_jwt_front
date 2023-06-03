import axios from "axios";
import { useEffect } from "react";
import { Box } from "@mui/material";

function Insresult() {
    const instituteURL = "http://localhost:5050/api/institute";
    useEffect(() => {
        axios.get(instituteURL)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <Box>
            <h1>Institute Result</h1>
        </Box>
    )
}

export default Insresult;