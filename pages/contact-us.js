import { Box, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Box sx={{
      width: '100vw',
      height: 'calc(100vh - 80px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography variant="h3" marginBottom="2rem">Have any questions?</Typography>
        <Typography variant="body1" marginBottom="2rem">We love to help</Typography>
        <Typography variant="h3" marginBottom="2rem">For all customer inquiries contact us via: </Typography>
        <Typography variant="body1" color="blue" marginBottom="2rem">serenityShop123@gmail.com </Typography>
        <Typography variant="body1" marginBottom="2rem" color="red" fontSize="1.5rem">This is not an actual shop it is just a concept</Typography>
      </Box>
    </Box>
  )
}

export default Contact