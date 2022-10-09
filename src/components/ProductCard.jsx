import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { urlFor } from '../../lib/client'
import Link from 'next/link'

const ProductCard = ({ product: { title, price, slug, variants } }) => {
    return (
        <Box sx={{
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Link href={slug.current === "coming-soon" ? '' : `/product/${encodeURIComponent(slug.current)}`}>
                <Box
                    component="img"
                    src={urlFor(variants[0].images[0])}
                    sx={{
                        width: '100%',
                    }}
                />
            </Link>
            <Button sx={{ bgcolor: 'primary.main', color: 'primary.dark', width: '100%', margin: 'auto', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>Add to Cart</Button>
            <Typography textAlign='center'>{title}</Typography>
            <Typography textAlign='center'>{`$${price}`}</Typography>
        </Box>
    )
}

export default ProductCard