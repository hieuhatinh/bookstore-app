import { Paper } from '@mui/material'
import Head from 'next/head'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import TabsContent from '@/components/contents/TabsContent'
import DefaultLayout from '@/components/layout/DefaultLayout'

// 4. xây dựng logic thêm sản phẩm vào giỏ hàng và các logic tương tự ở phần giỏ hàng bằng redux
// 10. làm các thông báo lỗi, warning đối với những đường dẫn chưa hoàn thiện

interface ITabItem {
    value: string
    label: string
}

const listTabsItem: ITabItem[] = [
    {
        value: '1',
        label: 'Sách phổ biến',
    },
    {
        value: '2',
        label: 'Sách bán chạy',
    },
    {
        value: '3',
        label: 'Sách mới nhất',
    },
    {
        value: '4',
        label: 'Sách đọc nhiều',
    },
    {
        value: '5',
        label: 'Sách khuyên đọc',
    },
]

const Home: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>BookStore</title>
            </Head>
            <main>
                <Paper className="h-full">
                    <TabsContent items={listTabsItem} />
                </Paper>
            </main>
        </>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
