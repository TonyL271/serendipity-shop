import { useRouter } from 'next/router'
import client, { urlFor } from '../../lib/client'
import { Box, Typography, Button, Select, MenuItem, FormControl } from '@mui/material'
import { useState } from 'react'

const Post = ({ product }) => {
    const router = useRouter()
    const { slug } = router.query
    const [quantity, setQuantity] = useState(1)

    return (
        <Box sx={{ width: '100vw', height: '100vh', }}>
            <Box
                sx={{
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'space-between',
                }}>
                <Box>
                    <Typography variant="h2">{product.title}</Typography>
                    <Box
                        component="img"
                        src={urlFor(product.defaultProductVariant.images[0])}
                        sx={{
                            position: 'relative',
                            width: '500px',
                            gridColumn: '1/2',
                        }}
                    />
                </Box>
                <Box>
                    <Box>
                        <Typography variant="h4">{product.body}</Typography>
                        <Typography variant="h3" sx={{ color: '#B12704' }}>{`$${product.price}`}</Typography>
                    </Box>
                    <FormControl sx={{ width: '20%', }}>
                        <Select
                            id="quantity-select"
                            label={'quantity'}
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        >
                            {[1, 2, 3, 4, 5].map((num) => (
                                <MenuItem key={num} value={num}>{num}</MenuItem>
                            ))}
                        </Select>
                        <Button id="add-to-cart">Add to Cart</Button>
                    </FormControl>
                </Box>
            </Box>

        </Box>
    )
}

export async function getStaticPaths() {
    const products = await client.fetch(`*[_type == "product"]`)
    const paths = products.map(product => {
        return { params: { slug: product.slug.current } }
    })

    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params: { slug } }) {
    console.log(slug)
    const products = await client.fetch(`*[_type == "product"]`)
    const product = products.find(product => product.slug.current === slug)
    return {
        props: { product },
    }
}

export default Post