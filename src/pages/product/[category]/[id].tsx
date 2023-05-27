import { ReactElement, useState } from 'react'
import Head from 'next/head'

import HeaderOnly from '@/components/layout/HeaderOnly'
import { NextPageWithLayout } from '@/pages/_app'

import ProductDetailComponent from '@/components/ProductDetail'
import { GetServerSideProps } from 'next'

type Props = {
    id: string | string[] | undefined
    category: string | string[] | undefined
}

const ProductDetail: NextPageWithLayout<Props> = ({ category, id }) => {
    const [title, setTitle] = useState<string>()

    return (
        <>
            <Head>
                <title>{title} | BookStore</title>
            </Head>
            <main>
                <ProductDetailComponent
                    setTitle={setTitle}
                    category={category}
                    id={id}
                />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
    query,
    params,
}) => {
    const { category, id } = query || params
    return {
        props: {
            category: category,
            id: id,
        },
    }
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
    return <HeaderOnly>{page}</HeaderOnly>
}

export default ProductDetail
