import { useContext } from 'react'
import { Box, Button, Typography } from '@mui/material'
import UserContext from '../UserContext';
import { urlFor } from '../../lib/client';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';


const Cart = () => {
    const { user, saveUser } = useContext(UserContext);
    const router = useRouter();
    const StyledButton = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width: '80%',
    }));
    return (
        <Box sx={{
            width: '100vw',
            minHeight: 'calc(100vh - 80px)',
            overflow: 'auto',
        }}>
            <Box sx={{ maxWidth: '800px', width: '100%', height: '90%', margin: 'auto' }}>
                <Typography variant="h2">Shopping Cart</Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        mb: '1rem',
                        gridGap: '1rem'
                    }}
                >
                    <Typography variant="h3" sx={{ gridColumn: '-3/-2' }}>Qty</Typography>
                    <Typography variant="h3" sx={{ gridColumn: '-2/-1' }}>Price</Typography>
                    <Box component="hr" sx={{ width: '100%', gridColumn: '1/-1' }}></Box>
                    <Box sx={{ gridColumn: '1/-1' }}>
                        {
                            user.cartItems.map((item, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                        mb: '2rem',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={urlFor(item.variants[0].images[0])}
                                        sx={{
                                            width: '200px',
                                            height: '200px',
                                        }} />
                                    <Typography textAlign={'center'} px="1rem">{item.title}</Typography>
                                    <Typography px="1rem">{item.qty}</Typography>
                                    <Typography px="1rem">{item.price * item.qty.toFixed(2)}</Typography>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box sx={{ gridColumn: '-1/-2' }}>
                        <Typography> {
                            `subtotal : ${user.cartItems.reduce((prev, item) => (prev + item.price * item.qty), 0).toFixed(2)}`
                        } </Typography>
                    </Box>
                    <StyledButton
                        sx={{ gridColumn: '-3/-2' }}
                        onClick={() => {
                            saveUser({ cartItems: [] })
                        }}
                    >
                        Clear Cart</StyledButton>
                    <StyledButton
                        sx={{ gridColumn: '-1/-2' }}
                        onClick={() => router.push('/checkout')}
                    >
                        Checkout Items</StyledButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Cart