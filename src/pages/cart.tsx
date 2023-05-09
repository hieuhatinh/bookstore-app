import Head from 'next/head'
import { Box, Typography } from '@mui/material'
import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import HeaderOnly from '@/components/layout/HeaderOnly'

const Cart: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Giỏ hàng | BookStore</title>
            </Head>
            <Box>
                <Typography variant="h1">Giỏ hàng</Typography>
            </Box>
        </>
    )
}

Cart.getLayout = function getLayout(page: ReactElement) {
    return <HeaderOnly>{page}</HeaderOnly>
}

export default Cart
