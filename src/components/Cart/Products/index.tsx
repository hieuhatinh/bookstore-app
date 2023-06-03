import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    List,
    ListSubheader,
    Paper,
    Typography,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'

import ProductItem from './ProductItem'
import { IUserCurrent, userProfileLocalStorage } from '@/constants'
import { db } from '@/config/firebase'

export interface IProductCart {
    'user-id': string
    'id-product': string
    'category-product': string
    quantity: number
}

export default function Products() {
    const [products, setProducts] = useState<IProductCart[]>([])
    const [checkedAll, setCheckedAll] = useState<boolean>(false)

    useEffect(() => {
        const storedData = localStorage.getItem(userProfileLocalStorage)
        const userCurrent: IUserCurrent = storedData
            ? JSON.parse(storedData)
            : null

        const fetchData = async () => {
            const newCollection = collection(db, 'carts')
            const q = query(
                newCollection,
                where('user-id', '==', userCurrent.uid)
            )
            const querySnapshot = await getDocs(q)
            const data = querySnapshot.docs.map(
                (doc) => doc.data() as IProductCart
            )
            setProducts(data)
        }

        fetchData()
    }, [])

    const handleChangeChecked = () => {
        setCheckedAll(!checkedAll)
    }

    return (
        <Box className="h-full">
            <List className="overflow-auto pt-0 max-h-list-product-height">
                <ListSubheader className="mb-3 z-10">
                    <Paper elevation={0}>
                        <FormGroup>
                            <Grid container className="items-center">
                                <Grid item xs={5}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedAll}
                                                name="all"
                                                onChange={handleChangeChecked}
                                            />
                                        }
                                        label={`Tất cả (${products.length} sản phẩm)`}
                                    />
                                </Grid>
                                <Grid item xs={2} className="text-center">
                                    <Typography variant="body1">
                                        Đơn giá
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} className="text-center">
                                    <Typography variant="body1">
                                        Số lượng
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} className="text-center">
                                    <Typography variant="body1">
                                        Thành tiền
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} className="text-center">
                                    <IconButton
                                        aria-label="delete"
                                        size="large"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Paper>
                </ListSubheader>
                <Paper elevation={0} className="px-4">
                    {products.map((book, index) => (
                        <ProductItem
                            key={index}
                            book={book}
                            checkedAll={checkedAll}
                        />
                    ))}
                </Paper>
            </List>
        </Box>
    )
}
