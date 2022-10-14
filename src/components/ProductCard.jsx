import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { urlFor } from '../../lib/client'
import Link from 'next/link'
import {AddToCartButton} from './'

const ProductCard = ({ product }) => {

    const [showIndex, setShowIndex] = useState(0)
    const [intervalId, setIntervalId] = useState(null)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if (hovered) {
            setShowIndex(
                (prevIndex) => (prevIndex + 1) % product.variants.length
            )
            setIntervalId(
                setInterval(
                    () => {
                        setShowIndex(prevIndex => (prevIndex + 1) % product.variants.length)
                    }
                    , 750)
            )
        }
        else {
            setShowIndex(0)
            clearInterval(intervalId)
        }
    }, [hovered])

    return (
        <Box
            onMouseEnter={() => {
                setHovered(true)
            }}

            onMouseLeave={() => {
                setHovered(false)
            }}
            sx={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center',
                transform: hovered ? 'scale(1.15)' : 'scale(1)',
                transition: 'transform 0.2s ease-in-out',

            }}>
            <Link href={product.slug.current === "coming-soon" ? '' : `/product/${encodeURIComponent(product.slug.current)}`}>
                <Box
                    component="img"
                    src={urlFor(product.variants[showIndex].images[0])}
                    sx={{
                        width: '100%',
                    }}
                />
            </Link>
            <AddToCartButton product={product}/>
            <Typography textAlign='center'>{product.title}</Typography>
            <Typography textAlign='center'>{`$${product.price}`}</Typography>
        </Box>
    )
}

export default ProductCard