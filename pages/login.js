import { Box, Button, TextField, FormControl, Typography } from "@mui/material"
import styled from "@emotion/styled"
import Link from "next/link";
const login = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: "15rem",
    marginBottom: '2rem'
  }));
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'primary.background',
    }}>
      <Box
        sx={{
          width: '60%',
          height: '50%',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <FormControl>
          <Typography component="legend" width="100%" textAlign="left" marginBottom="1rem">Login</Typography>
          <TextField id="input-username" label="username" variant="outlined" sx={{ mb: '2rem' }} />
          <TextField id="input-password" label="password" variant="outlined" type="password" sx={{ mb: '0.5rem' }} />
          <Link href="/forgot-password" passHref>
            <Box component="a" marginBottom="0.5rem" fontSize="0.8rem">
              Forgot password
            </Box>
          </Link>
          <StyledButton>Login</StyledButton>
          <StyledButton>Create Account</StyledButton>
        </FormControl>
      </Box>

    </Box>
  )
}

export default login