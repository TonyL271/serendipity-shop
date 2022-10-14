import { useRouter } from 'next/router'
import client, { urlFor } from '../../lib/client'
import { Box, Typography, Button, Select, MenuItem, FormControl, Rating } from '@mui/material'
import { useState } from 'react'
import { AddToCartButton, ImagePreview, ProductReview } from '../../src/components'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Post = ({ product }) => {
    const router = useRouter()
    const { slug } = router.query
    const [quantity, setQuantity] = useState(1)

    return (
        <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: 'primary.background', }}>
            <Box sx={{ display: { mobile: 'box', laptop: 'none' }, width: '100vw', height: '80px', }} />
            <Typography py="1rem" variant="h2" align='center'>{product.title}</Typography>
            <Box
                sx={{
                    width: {mobile:'100%',laptop:'80%'},
                    maxWidth:'1200px',
                    display: 'grid',
                    gridTemplateColumns: { mobile: '1fr', laptop: '1fr 1fr' },
                    mx: 'auto',
                    justifyContent: 'space-between',
                    gridGap: '3rem',
                }}>
                <ImagePreview product={product} />
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', width: { mobile: '50%', laptop: '100%' }, padding: '1rem', flexDirection: { mobile: 'column', laptop: 'row' } }}>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginRight: '1rem',
                            }}
                        >
                            <Typography variant="h3" width="100%" align='left' color='#B12704' fontSize="2.0rem" >{`$${product.price}`}</Typography>
                            <Typography variant="p" width="100%" align='left' color='black' fontSize="1.0rem" >In stock and usually ships within 1 to 3 business days.
                            </Typography>
                            <Typography variant="p" width="100%" align='left' color='rgba(52, 201, 235,1)' fontSize="1.0rem" >Free shipping over $50</Typography>
                        </Box>
                        <Box width='100%'>
                            <FormControl sx={{ display: 'flex', margin: 'auto', alignItems: 'center' }}>
                                <Box display="flex" width="50%" alignItems="center" justifyContent="space-between" marginBottom="2rem" mx="auto" >
                                    <Typography flexShrink="1" marginRight="1rem">qty:</Typography>
                                    <Select
                                        sx={{ width: '4rem', margin: 'auto', flexGrow: 1 }}
                                        id="quantity-select"
                                        label={'quantity'}
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    >
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <MenuItem key={num} value={num}>{num}</MenuItem>
                                        ))}
                                    </Select>
                                </Box>
                                <AddToCartButton product={product}/>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box margin='1rem'>
                        <Typography component="legend" align="left" width="100%">No rating given</Typography>
                        <Rating name="no-value" value={null} align="left" sx={{ width: '100%', }} />
                        <Typography variant="h4" mb="1rem">Description</Typography>
                        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>{product.body}</Typography>
                        <Box color="#ce2427">
                            <Typography variant="h4" mb="1rem" display="flex" alignItems="center">
                                <WarningAmberIcon sx={{ width: "2rem", height: "2rem" }} />
                                Warning!!!
                            </Typography>
                            <Typography variant="h6" mb="1rem">This is like a gumball machine, you will one of any three following items by random chance.</Typography>
                            <ol>
                                {product.variants.map((product, index) => (
                                    <li key={index}>{product.title}</li>
                                ))}
                            </ol>
                        </Box>
                    </Box>
                </Box>
                <ProductReview product={product} />
            </Box>
        </Box>
    )
}

export async function getStaticPaths() {
    const products = await client.fetch(`*[_type == "product"]`)
    let paths = products.map(product => {
        return { params: { slug: product.slug.current } }
    })

    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params: { slug } }) {
    const products = await client.fetch(`*[_type == "product"]`)
    const product = products.find(product => product.slug.current === slug)

    return {
        props: { product },
    }
}

export default Post