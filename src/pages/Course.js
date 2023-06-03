import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";
function Course() {
    const [courseFormData, setCourseFormData] = useState({});
    const courseURL = "http://localhost:5050/api/course";
    function handleSubmit() {
        axios.post(courseURL, courseFormData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="70vh"
            width="500px"
            margin="40px auto"
            padding="20px"
            borderRadius="10px"
            boxShadow="1px 1px 25px 5px #e1e1e1"
        >
            <Grid container spacing={0}>
                <Grid item md={12}>
                    <Typography typography="h4" align="center" padding="20px">COURSE</Typography>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Course Name" type="text" onChange={(e) => setCourseFormData({ ...courseFormData, courseName: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Duration" type="number" onChange={(e) => setCourseFormData({ ...courseFormData, duration: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Fees" type="number" onChange={(e) => setCourseFormData({ ...courseFormData, fees: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Short Name" type="text" onChange={(e) => setCourseFormData({ ...courseFormData, shortName: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2} textAlign="center" padding="20px">
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Course;