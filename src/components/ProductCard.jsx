import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { urlFor } from '../../lib/client'

const ProductCard = ({ product: { title, price, defaultProductVariant } }) => {
    // console.log(product.defaultProductVariant.images[0])
    console.log(defaultProductVariant.images[0])
    return (
        <Box sx={{
            display:'grid',
            alignItems:'center',
            justifyContent:'center',

        }}>
            <Box
                component="img"
                src={urlFor(defaultProductVariant.images[0])}
                sx={{
                    width:'100%'

                }}
            />
            <Button>Add to Cart</Button>
            <Typography textAlign='center'>{title}</Typography>
            <Typography textAlign='center'>{`$${price}`}</Typography>
        </Box>
    )
}

export default ProductCard