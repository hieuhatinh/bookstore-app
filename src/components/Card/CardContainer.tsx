import { Box, Grid, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import {
    CollectionReference,
    DocumentData,
    QuerySnapshot,
    collection,
    getDocs,
} from 'firebase/firestore'

import CardItem from './CardItem'
import { db } from '@/config/firebase'
import NoData from '@/components/NoData'

interface IPropsCollectionName {
    collectionName?: string | undefined | string[]
}

export interface IPropsResult {
    id: string
    author: string
    description: string
    img: string
    'issuing-company': string
    name: string
    'number-of-pages': number
    price: number
    'publishing-company': string
    size: string
}

export default function CardContainer(props: IPropsCollectionName) {
    const { collectionName } = props
    const [books, setBooks] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    // lấy data từ firestore
    useEffect(() => {
        const result = async () => {
            const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
                collection(
                    db,
                    collectionName as string
                ) as CollectionReference<DocumentData>
            )

            const result: IPropsResult[] = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() } as IPropsResult
            })

            setBooks(result)

            setLoading(false)
        }

        result()
    }, [collectionName])

    return (
        <Grid container spacing={1}>
            {loading ? (
                <>
                    {Array.from(new Array(4)).map((item, index) => (
                        <Grid key={index} item xs={3}>
                            <Box>
                                <Skeleton
                                    variant="rectangular"
                                    height={250}
                                    width="100%"
                                />
                                <Box>
                                    <Skeleton width="70%" />
                                    <Skeleton width="40%" />
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </>
            ) : (
                <>
                    {books ? (
                        books.map((book) => (
                            <Grid key={book.id} item xs={3}>
                                <CardItem
                                    image={book.img}
                                    name={book.name}
                                    id={book.id}
                                    price={book.price}
                                    category={collectionName}
                                />
                            </Grid>
                        ))
                    ) : (
                        <Grid xs={12}>
                            <NoData text="Không có sản phẩm nào" />
                        </Grid>
                    )}
                </>
            )}
        </Grid>
    )
}
