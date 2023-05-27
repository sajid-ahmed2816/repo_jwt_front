import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function Signup() {
    const [formData, setFormData] = useState({});
    let postFormDataURL = "http://localhost:5050/api/test"

    async function handleSubmit() {
        axios.post(postFormDataURL, formData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="70vh"
            width="500px"
            margin="40px auto"
            border="1px Solid #747474"
            borderRadius="10px"
        >
            <Grid container spacing={0}>
                <Grid item md={12}>
                    <Typography typography="h4" align="center">SIGN UP</Typography>
                </Grid>
                <Grid item md={6}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="First Name" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Last Name" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="User Name" onChange={(e) => setFormData({ ...formData, userName: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Password" type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Contact" type="number" onChange={(e) => setFormData({ ...formData, contact: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2} textAlign="center">
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Signup;