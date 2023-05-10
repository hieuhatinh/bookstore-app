import Head from 'next/head'
import { Box, Grid, Typography } from '@mui/material'
import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import HeaderOnly from '@/components/layout/HeaderOnly'

import Products from '@/components/Cart/Products'
import Invoice from '@/components/Cart/Invoice'

const Cart: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Giỏ hàng | BookStore</title>
            </Head>
            <Box>
                <Typography variant="h5" className="mb-4 mt-2">
                    Giỏ hàng
                </Typography>
                <Grid container spacing={2} className="min-h-content-height">
                    <Grid item xs={9}>
                        <Products />
                    </Grid>
                    <Grid item xs={3}>
                        <Invoice />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

Cart.getLayout = function getLayout(page: ReactElement) {
    return <HeaderOnly>{page}</HeaderOnly>
}

export default Cart
