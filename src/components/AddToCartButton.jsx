import { Button } from "@mui/material"
import { useContext } from "react"
import UserContext from '../UserContext'


const AddToCartButton = ({ product,setShowAlert }) => {

    const { user, saveUser } = useContext(UserContext)

    return (
        <Button
            sx={{
                bgcolor: 'primary.main',
                color: 'primary.dark',
                width: '100%',
                margin: 'auto',
                borderRadius: '0',
                '&:hover': {
                    bgcolor: 'primary.dark',
                    color: 'primary.main',
                }
            }}
            onClick={() => {
                if (product.slug.current !== "coming-soon") {
                    saveUser((prevUser) => {
                        const newUser = { ...prevUser }
                        if (newUser.cartItems.find(item => item.slug.current === product.slug.current)) { //item already exists
                            newUser.cartItems = newUser.cartItems.map(item => {
                                if (item.slug.current === product.slug.current) {
                                    return { ...item, qty: item.qty + 1 }
                                }
                                else {
                                    return item
                                }
                            })
                        } else {    //item doesn't exist
                            newUser.cartItems.push({ ...product, qty: 1 })
                        }
                        setShowAlert(true);
                        setTimeout(() => {
                            setShowAlert(false);
                        }, 1000)
                        return newUser;
                    })
                }
            }}
        >
            Add to Cart
        </Button>
    )
}

export default AddToCartButton