import { Label } from "@mui/icons-material"
import { Typography, Box, FormControl, TextField, Rating, Button } from "@mui/material"
import { useState } from "react"
const ProductReview = () => {
    const [comment, setComment] = useState('')
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gridColumn: '1/-1' }}>
            <Typography variant="h3" marginBottom="2rem">Product Reviews</Typography>
            <Box height="500px">
                <Typography variant="body" mb="2rem">There are currently no reviews yet</Typography>
            </Box>
            <Box sx={{ padding: '1rem', border: 'solid 1px black' }}>
                <FormControl >
                    <Typography component="legend" marginBottom="0.5rem">Rating</Typography>
                    <Rating name="rating" id="review-rating" value={null} align="left" sx={{ width: '100%', marginBottom: '2rem' }} />
                    <TextField
                        id="review-comment"
                        multiline
                        rows={5}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        sx={{
                            minWidth: '300px',
                        }} />
                    <Button sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#000',
                            color: '#fff',
                        }

                    }}
                    >Submit Review
                    </Button>
                </FormControl>

            </Box>
        </Box >
    )
}

export default ProductReview