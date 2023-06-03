import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import React from 'react'
import routes from '@/routes'
import { usePathname } from 'next/navigation'
import {
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from 'firebase/firestore'
import { IProductCart } from './Cart/Products'
import { db } from '@/config/firebase'

interface IProps {
    value: any
    setValue: any
    idProduct?: string | undefined
}

export default function NumberOfProducts(props: IProps) {
    const { value, setValue, idProduct } = props
    const pathname = usePathname()

    // Thay đổi dữ liệu trong firestore khi thay đổi số lượng sản phẩm
    const updateToDatabase = () => {
        if (pathname === routes.cart) {
            setTimeout(async () => {
                const newCollection = collection(db, 'carts')
                const q = query(
                    newCollection,
                    where('id-product', '==', idProduct)
                )
                const querySnapshot = await getDocs(q)

                const result = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id as string,
                        ...(doc.data() as IProductCart),
                    }
                })

                await updateDoc(doc(db, 'carts', result[0].id), {
                    quantity: value,
                })
            }, 5000)
        }
    }

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)

        updateToDatabase()
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        e.target.value = value.replace(/[^0-9]/g, '')
    }

    const handleIncreaseValue = () => {
        setValue((prev: any) => (prev + 1) as number)

        updateToDatabase()
    }

    const handleDecreaseValue = () => {
        setValue((prev: any) => (prev - 1) as number)

        updateToDatabase()
    }

    return (
        <>
            <Button
                disabled={value <= 1 ? true : false}
                className="button-custom-quantity"
                onClick={handleDecreaseValue}
            >
                <RemoveIcon />
            </Button>

            <input
                type="number"
                value={value}
                className="input-custom-quantity text-center"
                onChange={handleChangeValue}
                onInput={handleInput}
            />

            <Button
                className="button-custom-quantity"
                onClick={handleIncreaseValue}
            >
                <AddIcon />
            </Button>
        </>
    )
}
