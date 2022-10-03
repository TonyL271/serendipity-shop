import { Box, Typography, Button } from '@mui/material'

export default function Home() {
  return (
    <Box
      sx={{
        pt: '100px',
        height: '100vh',
        width: '100vw',
        bgcolor: 'primary.dark'
      }}>
      <Box className="hero" sx={{ display: 'flex', width: '100vw', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          component="img"
          src="/box.png"
          sx={{ mb: '1rem',width:'20%' }} />
        <Typography component="h3" variant="h3" color='secondary.main' fontSize={'3vw'} textAlign='center' marginBottom='4rem'>
          Life is random, so why not embrace it, <br /> and focus on the things that truly matter?
        </Typography>
        <Button
          variant="contained"
          sx={{
            position: 'relative',
            borderRadius: '15px',
            display: 'flex',
            maxWidth: '350px',
            width: '40vw',
            height: '13vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Box component="img" src="/gumball.png" sx={{ position: 'absolute', height: '70%', left: '1vw' }} />
          <Typography variant="h4" component="h4" sx={{
            fontWeight: '500',
            fontSize: 'max(2vw,20px)',
            
          }}>Shop Now</Typography>
          <Box component="img" src="/gachapon.png" sx={{ position: 'absolute', height: '70%', right: '1vw' }} />
        </Button>
      </Box>
    </Box>
  )
}
