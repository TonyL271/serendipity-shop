import { Box, FormControl, TextField, Typography, Button } from "@mui/material"
import { useContext } from "react"
import UserContext from "../UserContext"

const Checkout = () => {
    const { user, saveUser } = useContext(UserContext)
    return (
        <Box sx={{
            width: '100vw',
            minHeight: 'calc(100vh - 80px)',
        }}>
            <Box sx={{
                width: '50%',
                height: '100%',
                mx: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <FormControl sx={{ display: 'flex', height: '600px', justifyContent: 'space-between' }}>
                    <Typography variant="h4" marginBottom="2rem">SubTotal: ${`${user.cartItems.reduce((prev, item) => (prev + item.price * item.qty), 0).toFixed(2)}`}</Typography>
                    <Typography>Shipping Details</Typography>
                    <TextField label="First Name" />
                    <TextField label="Last Name" />
                    <TextField label="Country" />
                    <TextField label="State" />
                    <TextField label="Address" />
                    <Typography>Payment Detail</Typography>
                    <TextField label="Credit Card Number" />
                    <TextField label="cvv" type="password" />
                    <Button
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                        }}
                        onClick={() => alert('payment not processed because this is not a real shop')}
                    >Pay</Button>
                </FormControl>
            </Box>
        </Box>
    )
}

export default Checkout