import { Box, Typography, Button, autocompleteClasses } from '@mui/material'

export default function Home() {
  return (
    <Box
      sx={{
        pt: '150px',
        height: 'calc(100vh)',
        width: '100vw',
        bgcolor: 'primary.dark'
      }}>
      <Box className="hero" sx={{ display: 'flex', width: '100vw', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          component="img"
          src="/box.png"
          sx={{ mb: '1rem', }} />
        <Typography component="h3" variant="h3" color='secondary.main' textAlign='center' marginBottom='2rem'>
          Life is random, so why not embrace it, <br /> and focus on the things that truly matter?
        </Typography>
        <Button variant="contained"
          sx={{
            position: 'relative',
            display: 'flex',
            width: '400px',
            height: '100px',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Box component="img" src="/gumball.png" sx={{ position: 'absolute', height: '85px', left: '2rem' }} />
          <Typography variant="h4" component="h4" sx={{
            fontWeight: '500',
            fontSize: '1.8rem',
          }}>Shop Now</Typography>
          <Box component="img" src="/gachapon.png" sx={{ position: 'absolute', height: '80px', right: '2rem' }} />
        </Button>
      </Box>
    </Box>
  )
}
