import { Paper } from '@mui/material'
import Head from 'next/head'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import DefaultLayout from '@/components/layout/DefaultLayout'
import CardContainer from '@/components/Card/CardContainer'

const BooksOfGenre: NextPageWithLayout = () => {
    const router = useRouter()
    const { category } = router.query

    const [collectionName, setCollectionName] = useState<
        string | string[] | undefined
    >()

    useEffect(() => {
        setCollectionName(category)
    }, [category])

    return (
        <>
            <Head>
                <title>BookStore</title>
            </Head>
            <main>
                <Paper className="h-full p-3">
                    <CardContainer collectionName={collectionName} />
                </Paper>
            </main>
        </>
    )
}

BooksOfGenre.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>
}

export default BooksOfGenre
