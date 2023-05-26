import { Badge, Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import SendIcon from '@mui/icons-material/Send'

import NumberOfProducts from '@/components/NumberOfProducts'
import Shop from './Shop'

interface IPropInfoProductDetail {
    img: string
    name: string
    author: string
    price: number
}

export default function InfoProductDetail(props: IPropInfoProductDetail) {
    const { img, name, author, price } = props

    return (
        <Box>
            <Grid container>
                <Grid item xs={5}>
                    <Image
                        src={img}
                        alt={name}
                        width={500}
                        height={500}
                        className="w-full h-[70%] p-5 object-cover object-center"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box className="py-5 pe-5">
                        <Typography variant="body1">
                            Tác giả:{' '}
                            <Link href="" className="text-cyan-500">
                                {author}
                            </Link>
                        </Typography>
                        <Typography variant="h5">{name}</Typography>
                        <Badge
                            badgeContent="đ"
                            className="text-price font-bold text-xl my-5"
                        >
                            {price}
                        </Badge>
                        <Box className="my-4">
                            <Typography variant="body1" className="mb-1">
                                Số lượng
                            </Typography>
                            <Box className="flex items-center justify-start">
                                <NumberOfProducts />
                            </Box>
                        </Box>
                        <Box className="flex items-center">
                            <Button
                                variant="contained"
                                className="bg-submit-buy hover:bg-submit-buy-hv capitalize flex-1"
                            >
                                Chọn mua
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<SendIcon />}
                                className="ms-3 capitalize flex-1"
                            >
                                Chat
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Shop />
                </Grid>
            </Grid>
        </Box>
    )
}
