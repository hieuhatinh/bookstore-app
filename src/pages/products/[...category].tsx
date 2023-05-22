import { ReactElement } from 'react'
import Head from 'next/head'
import { Box, Paper } from '@mui/material'

import { NextPageWithLayout } from '@/pages/_app'
import InfoProductDetail from '@/components/ProductDetail/Info'
import TableInfo from '@/components/ProductDetail/TableInfo'
import ProductDescription from '@/components/ProductDetail/ProductDescription'
import Reviews from '@/components/ProductDetail/Reviews'
import DefaultLayout from '@/components/layout/DefaultLayout'

const ProductsCategory: NextPageWithLayout = () => {
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

ProductsCategory.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>
}

export default ProductsCategory
