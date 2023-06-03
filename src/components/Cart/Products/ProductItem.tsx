import {
    Badge,
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect, useState } from 'react'
import {
    DocumentData,
    DocumentSnapshot,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from 'firebase/firestore'

import { db } from '@/config/firebase'
import Product from './Product'
import NumberOfProducts from '@/components/NumberOfProducts'
import { IProduct } from '@/constants'
import { IProductCart } from '@/components/Cart/Products'

interface IProps {
    book: IProductCart
    checkedAll: boolean
}

export default function ProductItem(props: IProps) {
    const { book, checkedAll } = props
    const categoryProduct = book['category-product']
    const idProduct = book['id-product']

    const [value, setValue] = useState<number>(book.quantity)
    const [product, setProduct] = useState<any>()
    const [totalPrice, setTotalPrice] = useState<number>(0) // tính tổng tiền của số lượng sản phẩm
    const [checkedItem, setCheckedItem] = useState<boolean>(false)

    useEffect(() => {
        const result = async () => {
            const docSnap: DocumentSnapshot<DocumentData> = await getDoc(
                doc(
                    db,
                    categoryProduct as unknown as string,
                    idProduct as unknown as string
                )
            )

            const result: IProduct = docSnap.data() as IProduct
            setProduct(result)
        }

        result()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const result = value * parseInt(product?.price)
        setTotalPrice(result)
    }, [product?.price, value])

    useEffect(() => {
        if (checkedAll) {
            setCheckedItem(true)
        } else {
            setCheckedItem(false)
        }
    }, [checkedAll])

    const handleChangeCheckedItem = () => {
        setCheckedItem(!checkedItem)
    }

    return (
        <FormGroup className="py-4">
            <Grid container className="items-center">
                <Grid item xs={5}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checkedItem}
                                name={idProduct}
                                onChange={handleChangeCheckedItem}
                            />
                        }
                        label={
                            <Product
                                img={product?.img}
                                name={product?.name}
                                id={idProduct}
                                category={categoryProduct}
                            />
                        }
                    />
                </Grid>
                <Grid item xs={2} className="text-center">
                    <Badge badgeContent="đ" className="text-price">
                        {product?.price}
                    </Badge>
                </Grid>
                <Grid item xs={2} className="text-center">
                    <Box className="flex items-center justify-center">
                        <NumberOfProducts
                            value={value}
                            setValue={setValue}
                            idProduct={idProduct}
                        />
                    </Box>
                </Grid>
                <Grid item xs={2} className="text-center">
                    <Badge badgeContent="đ" className="text-price">
                        {totalPrice}
                    </Badge>
                </Grid>
                <Grid item xs={1} className="text-center">
                    <IconButton aria-label="delete" size="large">
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </FormGroup>
    )
}
