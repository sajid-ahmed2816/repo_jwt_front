import axios from "axios";
import { useEffect } from "react";
import { Box } from "@mui/material";

function Tearesult() {
    const teacherURL = "http://localhost:5050/api/teacher"
    useEffect(() => {
        axios.get(teacherURL)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <Box>
            <h1>Teacher result</h1>
        </Box>
    )
}

export default Tearesult