import { Box, Typography } from '@mui/material'
import Link from 'next/link'

interface IItem {
    to: string
    title: string
}

interface IProps {
    category: string
    items: IItem[]
}

export default function GridItemFooter(props: IProps) {
    const { category, items } = props

    return (
        <Box>
            <Typography variant="h5">{category}</Typography>
            <ul>
                {items.map((item, index) => (
                    <Link key={index} href={item.to}>
                        <Typography variant="body2">{item.title}</Typography>
                    </Link>
                ))}
            </ul>
        </Box>
    )
}
