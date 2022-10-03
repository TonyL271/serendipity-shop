import Link from 'next/link'
import { Box } from '@mui/material'

const NavLink = ({ href, title }) => {
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
            >
                {title}
            </Box>
        </Link>
    )
}

export default NavLink