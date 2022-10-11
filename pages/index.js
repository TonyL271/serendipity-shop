import { Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
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
          sx={{ mb: '1rem', height: '40vh',}} />
        <Typography component="h3" variant="h3" color='secondary.main' fontSize={'3vw'} textAlign='center' marginBottom='4rem'>
          Life is random, so why not embrace it, <br /> and focus on the things that truly matter?
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push('/shop')}
          sx={{
            position: 'relative',
            borderRadius: '15px',
            display: 'flex',
            width: '300px',
            height: '10vh',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              opacity:'0.8',
              color:'white',
              backgroundColor:'black'
            }
          }}>
          <Box component="img" src="/gumball.png" sx={{ position: 'absolute', maxHeight: '6rem', height: '70%', left: '1rem' }} />
          <Typography variant="h4" component="h4" sx={{
            fontWeight: '500',
            fontSize: '2rem',
            ml: '4.5rem',
          }}>Shop Now</Typography>
        </Button>
      </Box>
    </Box>
  )
}
