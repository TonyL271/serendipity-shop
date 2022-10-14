import { Box, Typography } from "@mui/material"
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  return (
    <Box sx={{
      width: '100vw',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      color:'white',
      py:'0.5rem',
      backgroundColor:'#000000',
    }}>
      <Typography>Designed and built by Tony Liang</Typography>
      <Link href="https://github.com/TonyL271/serendipity-shop">
        <GitHubIcon />
      </Link>
    </Box>
  )
}

export default Footer