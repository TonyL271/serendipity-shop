import { Box, Typography } from "@mui/material"

const about = () => {
    return (
        <Box sx={{
            width: '100vw',
            height: 'calc(100vh - 80px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'primary.background',
        }}>
            <Box
                sx={{
                    width: '60%',
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                <Typography variant="h2" marginBottom="2rem">Paradox of Choice</Typography>
                <Box component="img" src="./opportunity.png" marginBottom="2rem"></Box>
                <Typography variant="body1" sx={{
                    fontSize: '1.5rem',
                }}>
                    The amount of choices that we have nowadays far exceeds the choices we had in the past. While an increase in freedom sounds like a good thing, it can also be overwhelming. The more choices we have, the more difficult it is to make a decision. This is called decision fatigue. Decision fatigue is the mental exhaustion that comes from making too many decisions. It is a real phenomenon that can affect our decision-making abilities. It is also the reason why we often end up buying the first thing we see, even if it is not the best option. The more choices we have, the more likely we are to make a bad decision. This is why it is important to limit the number of choices we have to make. This is why we have created Serenity Shop. We have limited the number of choices you have to make, so you can reserve best decision for the things that matter the most.
                </Typography>
            </Box>
        </Box >
    )
}

export default about