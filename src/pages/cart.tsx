import Head from 'next/head'
import { Box, Button, Grid, Typography } from '@mui/material'
import { NextPageWithLayout } from './_app'
import { ReactElement, useEffect, useState } from 'react'
import HeaderOnly from '@/components/layout/HeaderOnly'

import Products from '@/components/Cart/Products'
import Invoice from '@/components/Cart/Invoice'
import { userProfileLocalStorage } from '@/constants'
import routes from '@/routes'

const Cart: NextPageWithLayout = () => {
    const [haveData, setHaveData] = useState<boolean>(true)

    useEffect(() => {
        const userData = localStorage.getItem(userProfileLocalStorage)

        if (!userData) {
            setHaveData(false)
        }
    }, [])

    if (haveData === false) {
        return (
            <>
                <Head>
                    <title>Giỏ hàng | BookStore</title>
                </Head>
                <Box className="flex flex-col justify-center items-center h-screen">
                    <Typography variant="h5">
                        Bạn cần đăng nhập để có thể truy cập trang này.
                    </Typography>
                    <Button
                        href={routes.login}
                        variant="contained"
                        className="normal-case mt-2"
                    >
                        Đi đăng nhập
                    </Button>
                </Box>
            </>
        )
    }

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
