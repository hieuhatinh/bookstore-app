import { Box, Grid } from '@mui/material'

import CardItem from './CardItem'

export default function CardContainer() {
    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={3} spacing={2}>
                    <CardItem />
                </Grid>
            </Grid>
        </Box>
    )
}
