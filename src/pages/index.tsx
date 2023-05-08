import { Paper } from '@mui/material'
import Head from 'next/head'

import TabsContent from '@/components/contents/TabsContent'

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
    {
        value: '6',
        label: 'Sách thời đại',
    },
    {
        value: '7',
        label: 'Sách hay nhất',
    },
    {
        value: '8',
        label: 'Sách hay nhất',
    },
    {
        value: '9',
        label: 'Sách hay nhất',
    },
]

export default function Home() {
    return (
        <>
            <Head>
                <title>BookStore</title>
            </Head>
            <main className="min-h-sidebar-height">
                <Paper className="h-full">
                    <TabsContent items={listTabsItem} />
                </Paper>
            </main>
        </>
    )
}
