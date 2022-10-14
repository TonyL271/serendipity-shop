import { Box, Typography } from "@mui/material"
import { urlFor } from '../../lib/client'
import { useEffect, useState } from "react";

const ProductPreview = ({ product }) => {
    const [hoverImg, setHoverImg] = useState(-1);
    const [selectedImg, setSelectImage] = useState(0);
    const [showImg, setShowImg] = useState(0);

    useEffect(() => {
        setShowImg(hoverImg === -1 ? selectedImg : hoverImg)
    }, [hoverImg])

    return (
        <Box sx={{}} >
            <Typography variant="h4" sx={{ gridColumn: '1/-1', }}>{product.variants[hoverImg === -1 ? selectedImg : hoverImg].title}</Typography>
            <Box>
                <Box
                    component="img"
                    src={urlFor(product.variants[hoverImg === -1 ? selectedImg : hoverImg].images[0])}
                    sx={{
                        position: 'relative',
                        width: { mobile: '100%', laptop: '500px' },
                        gridColumn: '1/2',
                        pt: '1.5rem',
                        mb: '1.5rem',
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
                                    setHoverImg(index)
                                }}
                                onMouseLeave={(e) => {
                                    setHoverImg(-1)
                                }}
                                onDragStart={(e) => {
                                    e.preventDefault()
                                }}
                                onClick={(e) => {
                                    setSelectImage(index)
                                }}
                                sx={{
                                    width: { mobile: '20vw', tablet: '15vw', laptop: '12vw', desktop: '6vw' },
                                    opacity: 0.5,
                                    opacity: index === showImg ? 1 : 0.5,
                                    border: index === showImg ? '3px solid' : 'none',
                                    borderColor: index === showImg ? 'primary.main' : 'none',

                                }}
                            />
                        ))
                    }
                </Box>
            </Box>
        </Box >
    )
}
export default ProductPreview