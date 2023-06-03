import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";
function Institute() {
    const [instituteFormData, setInstituteFormData] = useState({});
    const instituteURL = "http://localhost:5050/api/institute";
    function handleSubmit() {
        axios.post(instituteURL, instituteFormData)
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
                    <Typography typography="h4" align="center" padding="20px">INSTITUTE</Typography>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Name" type="text" onChange={(e) => setInstituteFormData({ ...instituteFormData, name: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Address" type="text" onChange={(e) => setInstituteFormData({ ...instituteFormData, address: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Short Name" type="text" onChange={(e) => setInstituteFormData({ ...instituteFormData, shortName: e.target.value })} fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Telephone" type="number" onChange={(e) => setInstituteFormData({ ...instituteFormData, tel: e.target.value })} fullWidth />
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

export default Institute;