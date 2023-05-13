import { ReactElement } from 'react'
import Head from 'next/head'
import { Box, Paper } from '@mui/material'

import HeaderOnly from '@/components/layout/HeaderOnly'
import { NextPageWithLayout } from '../_app'
import InfoProductDetail from '@/components/ProductDetail/Info'
import TableInfo from '@/components/ProductDetail/TableInfo'
import ProductDescription from '@/components/ProductDetail/ProductDescription'
import Reviews from '@/components/ProductDetail/Reviews'

const ProductDetail: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <main>
                <Box>
                    <Paper className="mb-5">
                        <InfoProductDetail />
                    </Paper>
                    <Paper className="mb-5">
                        <TableInfo />
                    </Paper>
                    <Paper className="mb-5">
                        <ProductDescription />
                    </Paper>
                    <Paper className="mb-5">
                        <Reviews />
                    </Paper>
                </Box>
            </main>
        </>
    )
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
    return <HeaderOnly>{page}</HeaderOnly>
}

export default ProductDetail
