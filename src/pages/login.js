import { Box, Typography, TextField, Button, Grid } from "@mui/material";

function Login() {
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
                    <Typography typography="h4" align="center" padding="20px">LOGIN</Typography>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Email" fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2}>
                        <TextField variant="outlined" label="Password" fullWidth />
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box margin={2} textAlign="center" padding="20px">
                        <Button variant="contained">Submit</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Login;