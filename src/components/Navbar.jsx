import React from 'react'
import { Box, Button } from '@mui/material'
import Link from 'next/link'
import { styled } from '@mui/system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {


  const StyledAnchor = styled('a')(({ theme }) => ({
    color: theme.palette.primary.dark,
    textDecoration: 'none',
    fontSize: '2.5rem',
    marginRight: '3rem'
  }))


  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '80px',
        bgcolor: 'primary.main',
        alignItems: 'center',
      }}>
      <Box component="h1"
        sx={{
          textAlign: 'center',
          color: 'white',
          fontSize: '2.8rem',
          mx: '4rem'
        }}>Serendipity</Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Link href="/" passHref>
          <StyledAnchor >Home</StyledAnchor>
        </Link>
        <Link href="/shop" passHref>
          <StyledAnchor >Shop</StyledAnchor>
        </Link>
        <Link href="/about" passHref>
          <StyledAnchor >About</StyledAnchor>
        </Link>
      </Box>
      <Box component="span" sx={{ position: 'absolute', right: '3rem' }}>
        <FontAwesomeIcon icon={faCartShopping} size="2x"/>
      </Box>
    </Box>
  )
}

export default Navbar