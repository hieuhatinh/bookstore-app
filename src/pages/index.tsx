import { Paper } from '@mui/material'
import Head from 'next/head'

import Tabs from '@/components/contents/Tabs'

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

export default function Home() {
    return (
        <>
            <Head>
                <title>BookStore</title>
            </Head>
            <main>
                <Paper>
                    <Tabs items={listTabsItem} />
                </Paper>
            </main>
        </>
    )
}
