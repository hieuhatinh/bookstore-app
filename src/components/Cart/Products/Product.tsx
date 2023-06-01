import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import routes from '@/routes'

interface IProps {
    img: string
    name: string
    id: any | string
    category: any | string
}

export default function Product(props: IProps) {
    const { img, name, id, category } = props

    return (
        <Link href={routes.linkToProduct(category, id)}>
            <Box className="flex items-center">
                <Image src={img} alt={name} width={100} height={200} />
                <Typography variant="h6" className="three-dots text-base">
                    {name}
                </Typography>
            </Box>
        </Link>
    )
}
