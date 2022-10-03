import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { urlFor } from '../../lib/client'
import Link from 'next/link'

const ProductCard = ({ product: { title, price, slug, defaultProductVariant } }) => {
    return (
        <Box sx={{
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Link href={`/product/${encodeURIComponent(slug.current)}`}>
                <Box
                    component="img"
                    src={urlFor(defaultProductVariant.images[0])}
                    sx={{
                        width: '100%'
                    }}
                    onClick={() => console.log('clicked')}
                />
            </Link>
            <Button sx={{ bgcolor: 'primary.main', color: 'primary.dark', width: '40%', margin: 'auto' }}>Add to Cart</Button>
            <Typography textAlign='center'>{title}</Typography>
            <Typography textAlign='center'>{`$${price}`}</Typography>
        </Box>
    )
}

export default ProductCard