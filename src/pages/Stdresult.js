import { Box } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

function Stdresult() {
    const studentURL = "http://localhost:5050/api/student"
    useEffect(() => {
        axios.get(studentURL)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <Box>
            <h1>Student result</h1>
        </Box>
    )
}

export default Stdresult;