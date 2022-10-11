import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { urlFor } from '../../lib/client'
import Link from 'next/link'

const ProductCard = ({ product: { title, price, slug, variants } }) => {

    const [showIndex, setShowIndex] = useState(0)
    const [intervalId, setIntervalId] = useState(null)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if (hovered) {
            setShowIndex(
                (prevIndex) => (prevIndex + 1) % variants.length
            )
            setIntervalId(
                setInterval(
                    () => {
                        setShowIndex(prevIndex => (prevIndex + 1) % variants.length)
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
            <Link href={slug.current === "coming-soon" ? '' : `/product/${encodeURIComponent(slug.current)}`}>
                <Box
                    component="img"
                    src={urlFor(variants[showIndex].images[0])}
                    sx={{
                        width: '100%',
                    }}
                />
            </Link>
            <Button sx={{
                bgcolor: 'primary.main',
                color: 'primary.dark',
                width: '100%',
                margin: 'auto',
                borderRadius: '0',
                '&:hover': {
                    bgcolor: 'primary.dark',
                    color: 'primary.main',
                }
            }}>Add to Cart</Button>
            <Typography textAlign='center'>{title}</Typography>
            <Typography textAlign='center'>{`$${price}`}</Typography>
        </Box>
    )
}

export default ProductCard