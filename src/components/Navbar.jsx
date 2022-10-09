import React from 'react'
import { Box, Button } from '@mui/material'
import Link from 'next/link'
import { styled } from '@mui/system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from '../components/'



const Navbar = () => {
  const [openHamburger, setOpenHamburger] = React.useState(false)

  const StyledAnchor = styled('a')(({ theme }) => ({
    color: theme.palette.primary.dark,
    textDecoration: 'none',
    fontSize: '2.5rem',
    marginRight: '3rem'
  }))

  return (
    <Box
      sx={{
        position: {
          mobile: 'fixed',
          laptop: 'relative',
        },
        display: 'flex',
        width: '100vw',
        zIndex: 1,
        height: {
          mobile: openHamburger ? '100vh' : '80px',
          laptop: '80px'
        },
        bgcolor: 'primary.main',
        alignItems: 'center',
        justifyContent: {
          mobile: 'center',
          laptop: 'start'
        },
      }}>
      <Box component="span"
        sx={{
          display: {
            mobile: 'inline',
            laptop: 'none',
          },
          position: 'absolute',
          left: '2rem',
          top: '1.5rem',
          zIndex: 2,
        }}
        onClick={() => setOpenHamburger(!openHamburger)}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Box>
      <Link href="/" passHref>
        <Box component="a"
          sx={{
            textAlign: 'center',
            color: 'white',
            fontSize: '2.8rem',
            margin: 0,
            fontWeight: '600',
            textDecoration: 'none',
            marginLeft: {
              mobile: '0',
              laptop: '4rem'
            },
            width: {
              mobile: '100%',
              laptop: 'auto',
            },
            position: {
              mobile: 'absolute',
              laptop: 'relative',
            },
            top: {
              mobile: '0.4rem',
              laptop: 'auto',
            },
          }}>
          Serendipity
        </Box>
      </Link>
      <Box
        sx={{
          display: {
            mobile: openHamburger ? 'flex' : 'none',
            laptop: 'flex',
          },
          marginLeft: {
            mobile: '0',
            laptop: '4rem'

          },
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: {
            mobile: 'column',
            laptop: 'row',
          },
          zIndex: 2,
        }}>
        <NavLink setOpenHamburger={setOpenHamburger} href="/shop" title="Shop" />
        <NavLink setOpenHamburger={setOpenHamburger} href="/shipping" title="Shipping" />
        <NavLink setOpenHamburger={setOpenHamburger} href="/about" title="About" />
        <NavLink setOpenHamburger={setOpenHamburger} href="/login" title="Login" />
      </Box>
      <Box component="span" sx={{ position: 'absolute', right: '3rem', top: '1.5rem' }}>
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
      </Box>
    </Box >
  )
}

export default Navbar