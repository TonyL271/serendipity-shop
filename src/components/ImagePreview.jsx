import { Box } from "@mui/material"
import { urlFor } from '../../lib/client'
import { useState } from "react";

const ProductPreview = ({ product }) => {
    const [hover, setHover] = useState(-1);
    const [showImg, setShowImage] = useState(0);

    return (
        <>
            <Box
                component="img"
                src={urlFor(product.variants[showImg].images[0])}
                sx={{
                    position: 'relative',
                    width: '25vw',
                    gridColumn: '1/2',
                }}
            />
            <Box>
                {
                    product.variants.map((variant, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={urlFor(variant.images[0])}
                            onMouseEnter={(e) => {
                                setHover(index)
                            }}
                            onMouseLeave={(e) => {
                                setHover(-1)
                            }}
                            onClick={(e) => {
                                setShowImage(index)
                            }}
                            sx={{
                                width: '5vw',
                                opacity: 0.5,
                                opacity: showImg === index && hover === -1 ? 1 : 0.5,
                                '&:hover': {
                                    opacity: 1,
                                    border: '3px solid',
                                    borderColor: 'primary.main',
                                }

                            }}
                        />
                    ))
                }
            </Box>
        </>
    )
}
export default ProductPreview