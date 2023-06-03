import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";
function Teacher() {
    const [teacherFormData, setTeacherFormData] = useState({});
    const teacherURL = "http://localhost:5050/api/teacher";
    function handleSubmit() {
        axios.post(teacherURL, teacherFormData)
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
                    <Typography typography="h4" align="center" padding="20px">TEACHER</Typography>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Name" type="text" onChange={(e) => setTeacherFormData({ ...teacherFormData, name: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Contact" type="number" onChange={(e) => setTeacherFormData({ ...teacherFormData, contact: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Course" type="text" onChange={(e) => setTeacherFormData({ ...teacherFormData, course: e.target.value })} fullWidth />
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

export default Teacher;