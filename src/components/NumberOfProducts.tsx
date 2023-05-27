import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { RootState } from '@/store'

export default function NumberOfProducts() {
    // const dispatch = useDispatch()
    // const router = useRouter()
    // const { category, id } = router

    // const totalBooks = useSelector(
    //     (state: RootState) => state.bookReducer.items[id].quantity ?? 0
    // )

    // const [valueNumber, setValueNumber] = useState<number>(totalBooks)

    // console.log(category, id)

    // console.log(totalBooks)

    // const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValueNumber(+e.target.value)
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(setNumberProduct(valueNumber))
    //     }, 5000)
    // }, [dispatch, valueNumber])

    return (
        <>
            <Button
                className="button-custom-quantity"
                // onClick={() => setValueNumber((prev) => prev++)}
            >
                <AddIcon />
            </Button>
            <input
                type="text"
                value="1"
                className="input-custom-quantity text-center"
                // onChange={handleChangeValue}
            />
            <Button
                className="button-custom-quantity"
                // onClick={() => setValueNumber((prev) => prev--)}
            >
                <RemoveIcon />
            </Button>
        </>
    )
}
