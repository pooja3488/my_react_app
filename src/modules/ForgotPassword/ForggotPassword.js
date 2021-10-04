import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
  
const theme = createTheme();  

const ForgotPassword = (props) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 6,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Card sx={{ padding: 4, maxWidth: '100%', }}>
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
                                    Forgot Password
                                </Typography>
                                <Typography component="h2" variant="h6" sx={{ fontWeight: 500 }}>
                                    Find your email
                                </Typography>
                                <Typography align="left" variant="body2" sx={{ fontWeight: 300 }}>
                                    Enter your phone number or recovery email
                                </Typography>
                                <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    placeholder="Phone number or email"
                                    id="email"
                                    label="Phone number or email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, float: 'right' }}
                                >
                                    Next
                                </Button>
                            </Box>
                            </Card>
                        </Box>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default ForgotPassword;
