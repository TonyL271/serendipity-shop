import { useState, useContext, useEffect } from 'react'
import UserContext from '../UserContext'
import { Box, Button } from '@mui/material'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from '../components/'
import { useRouter } from 'next/router';



const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false)
  const { user, setUser } = useContext(UserContext)
  const [cartLength, setCartLength] = useState(0)
  const router = useRouter();
  useEffect(() => {
    setCartLength(user.cartItems.length)
  }, [user])

  return (
    <Box>
      <Box
        sx={{
          position: {
            mobile: 'fixed',
            laptop: 'relative',
          },
          display: 'flex',
          width: '100vw',
          zIndex: 2,
          height: {
            mobile: openHamburger ? '100vh' : '80px',
            laptop: '80px'
          },
          bgcolor: 'primary.main',
          alignItems: 'center',
          justifyContent: {
            mobile: 'center',
            tablet: 'center',
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
            zIndex: 3,
          }}
          onClick={() => setOpenHamburger(!openHamburger)}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </Box>
        <Link href="/" passHref>
          <Box component="a"
            sx={(theme) => ({
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
              [theme.breakpoints.down('tablet')]: {
                fontSize: '2.0rem',
                top: '1.0rem',
              }

            })}>
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
            zIndex: 3,
          }}>
          <NavLink setOpenHamburger={setOpenHamburger} href="/shop" title="Shop" />
          <NavLink setOpenHamburger={setOpenHamburger} href="/about" title="About" />
          <NavLink setOpenHamburger={setOpenHamburger} href="/login" title="Login" />
          <NavLink setOpenHamburger={setOpenHamburger} href="/contact-us" title="Contact Us" />
        </Box>
        <Box component="span" sx={{
          position: 'absolute', right: '3rem', top: '1.5rem',
          '&:after': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '1.2rem',
            height: '1.2,rem',
            color: 'red',
            top: '-0.5rem',
            right: '-0.25rem',
            borderRadius: '100%',
            backgroundColor: 'rgba(255,255,255,0.9)',
            zIndex: 3,
            content: !user ? "''" : `\'${cartLength}\'`
          }
        }}
          onClick={() => router.push('/cart')}
        >
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </Box>
      </Box >
      <Box
        className="look"
        sx={{
          display: { laptop: "none" },
          position: 'relative',
          width: '100vw',
          height: '80px',
        }} >
      </Box>
    </Box >
  )
}

export default Navbar