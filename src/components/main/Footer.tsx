import { Box, Container, Grid } from '@mui/material'
import GridItemFooter from './components/GridItemFooter'
import { customerSupport } from '@/constants'

export default function Footer() {
    return (
        <Box className="relative bottom-0 mt-5 py-5 bg-slate-300 z-10">
            <Container className=" flex justify-between items-center">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <GridItemFooter
                            category="Hỗ trợ khách hàng"
                            items={customerSupport}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <GridItemFooter
                            category="Hỗ trợ khách hàng"
                            items={customerSupport}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <GridItemFooter
                            category="Hỗ trợ khách hàng"
                            items={customerSupport}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <GridItemFooter
                            category="Hỗ trợ khách hàng"
                            items={customerSupport}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
