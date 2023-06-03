import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";
function Student() {
    const [studentFormData, setStudentFormData] = useState({});
    const studentURL = "http://localhost:5050/api/student";
    function handleSubmit() {
        axios.post(studentURL, studentFormData)
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
                    <Typography typography="h4" align="center" padding="20px">STUDENT</Typography>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="First Name" type="text" onChange={(e) => setStudentFormData({ ...studentFormData, firstName: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Last Name" type="text" onChange={(e) => setStudentFormData({ ...studentFormData, lastName: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Contact" type="number" onChange={(e) => setStudentFormData({ ...studentFormData, contact: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Email" type="text" onChange={(e) => setStudentFormData({ ...studentFormData, email: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Password" type="password" onChange={(e) => setStudentFormData({ ...studentFormData, password: e.target.value })} fullWidth />
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

export default Student;