import { Badge, Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import SendIcon from '@mui/icons-material/Send'
import { useContext, useState } from 'react'

import NumberOfProducts from '@/components/NumberOfProducts'
import Shop from './Shop'
import loadingBook from '@/assets/images/loading_book.jpg'
import { OpenSuccessMessageContext } from '@/pages/product/[category]/[id]'
import { IUserCurrent, userProfileLocalStorage } from '@/constants'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/config/firebase'

interface IPropInfoProductDetail {
    img: string
    name: string
    author: string
    price: number
    category: string | string[] | undefined
    id: string | string[] | undefined
}

export default function InfoProductDetail(props: IPropInfoProductDetail) {
    const { category, id } = props

    const [value, setValue] = useState<number>(1)

    // useContext xử lý thông báo đã thêm sản phẩm vào giỏ hàng
    const valueProvider = useContext(OpenSuccessMessageContext)
    const { setOpenSuccessMessage } = valueProvider

    // xử lý thêm sản phẩm vào store
    const handleBuy = () => {
        const storedData = localStorage.getItem(userProfileLocalStorage)
        const userCurrent: IUserCurrent = storedData
            ? JSON.parse(storedData)
            : null

        const addToDatabase = async () => {
            const newCollection = collection(db, 'carts')

            await addDoc(newCollection, {
                'user-id': userCurrent.uid,
                'id-product': id,
                'category-product': category,
                quantity: value,
            })
        }

        addToDatabase()

        setOpenSuccessMessage(true)
    }

    return (
        <Box>
            <Grid container>
                <Grid item xs={5}>
                    <Image
                        src={props.img || loadingBook}
                        alt={props.name || 'image'}
                        width={500}
                        height={500}
                        className="w-full h-[70%] p-5 object-contain object-center"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box className="py-5 pe-5">
                        <Typography variant="body1">
                            Tác giả:{' '}
                            <Link href="" className="text-cyan-500">
                                {props.author}
                            </Link>
                        </Typography>
                        <Typography variant="h5">{props.name}</Typography>
                        <Badge
                            badgeContent="đ"
                            className="text-price font-bold text-xl my-5"
                        >
                            {props.price}
                        </Badge>
                        <Box className="my-4">
                            <Typography variant="body1" className="mb-1">
                                Số lượng
                            </Typography>
                            <Box className="flex items-center justify-start">
                                <NumberOfProducts
                                    value={value}
                                    setValue={setValue}
                                />
                            </Box>
                        </Box>
                        <Box className="flex items-center">
                            <Button
                                variant="contained"
                                className="bg-submit-buy hover:bg-submit-buy-hv capitalize flex-1"
                                onClick={handleBuy}
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
