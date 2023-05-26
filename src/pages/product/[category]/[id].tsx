import { ReactElement, useEffect, useState } from 'react'
import Head from 'next/head'
import { Box, Paper } from '@mui/material'

import HeaderOnly from '@/components/layout/HeaderOnly'
import { NextPageWithLayout } from '@/pages/_app'
import InfoProductDetail from '@/components/ProductDetail/Info'
import TableInfo from '@/components/ProductDetail/TableInfo'
import ProductDescription from '@/components/ProductDetail/ProductDescription'
import Reviews from '@/components/ProductDetail/Reviews'
import { useRouter } from 'next/router'
import {
    DocumentData,
    DocumentReference,
    DocumentSnapshot,
    doc,
    getDoc,
} from 'firebase/firestore'
import { db } from '@/config/firebase'

type IProduct = {
    author: string
    description: string
    img: string
    'issuing-company': string
    name: string
    'number-of-pages': number
    price: number
    'publishing-company': string
    size: string
    type: string
}

const ProductDetail: NextPageWithLayout = () => {
    const [product, setProduct] = useState<any>()

    const router = useRouter()
    const { category, id } = router.query

    useEffect(() => {
        const result = async () => {
            const docRef: DocumentReference<DocumentData> = doc(
                db,
                category as string,
                id as string
            )

            const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef)

            setProduct(docSnap.data() as IProduct)
        }

        result()
    }, [category, id])

    return (
        <>
            <Head>
                <title>{product.name} | BookStore</title>
            </Head>
            <main>
                <Box>
                    <Paper className="mb-5">
                        <InfoProductDetail
                            img={product.img}
                            name={product.name}
                            author={product.author}
                            price={product.price}
                        />
                    </Paper>
                    <Paper className="mb-5">
                        <TableInfo
                            issuingCompany={product['issuing-company']}
                            numberOfPages={product['number-of-pages']}
                            size={product.size}
                            publishingCompany={product['publishing-company']}
                        />
                    </Paper>
                    <Paper className="mb-5">
                        <ProductDescription
                            description={product.description}
                        />
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
