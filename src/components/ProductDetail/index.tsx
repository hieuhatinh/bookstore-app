import { Box, Paper } from '@mui/material'
import {
    DocumentData,
    DocumentReference,
    DocumentSnapshot,
    doc,
    getDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { db } from '@/config/firebase'

import InfoProductDetail from '@/components/ProductDetail/Info'
import TableInfo from '@/components/ProductDetail/TableInfo'
import ProductDescription from '@/components/ProductDetail/ProductDescription'
import Reviews from '@/components/ProductDetail/Reviews'

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

interface IProps {
    setTitle: (title: string) => void
    id: string | string[] | undefined
    category: string | string[] | undefined
}

export default function ProductDetailComponent(props: IProps) {
    const { setTitle, category, id } = props
    const [product, setProduct] = useState<any>()

    useEffect(() => {
        const result = async () => {
            const docSnap: DocumentSnapshot<DocumentData> = await getDoc(
                doc(db, category as string, id as string)
            )

            const result: IProduct = docSnap.data() as IProduct
            setProduct(result)
        }

        result()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (product) {
            setTitle(product.name)
        }
    }, [product, setTitle])

    return (
        <Box>
            <Paper className="mb-5">
                <InfoProductDetail
                    img={product?.img}
                    name={product?.name}
                    author={product?.author}
                    price={product?.price}
                />
            </Paper>
            <Paper className="mb-5">
                <TableInfo
                    issuingCompany={product?.['issuing-company']}
                    numberOfPages={product?.['number-of-pages']}
                    size={product?.size}
                    publishingCompany={product?.['publishing-company']}
                />
            </Paper>
            <Paper className="mb-5">
                <ProductDescription description={product?.description} />
            </Paper>
            <Paper className="mb-5">
                <Reviews />
            </Paper>
        </Box>
    )
}
