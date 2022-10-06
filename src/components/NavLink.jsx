import Link from 'next/link'
import { Box } from '@mui/material'

const NavLink = ({ href, title,setOpenHamburger }) => {

    const onNavClick = () => {
        setOpenHamburger(false)
    }

    return (
        <Link href={href} passHref>
            <Box
                component="a"
                sx={{
                    color: 'primary.dark',
                    textDecoration: 'none',
                    fontSize: '2.5rem',
                    marginRight: '3rem',
                    marginBottom: {
                        mobile: '4rem',
                        laptop: 0,
                    }
                }}
                onClick={onNavClick}
            >
                {title}
            </Box>
        </Link>
    )
}

export default NavLink