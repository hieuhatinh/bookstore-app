import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import React, { DOMAttributes } from 'react'

interface IProps {
    value: any
    setValue: any
}

export default function NumberOfProducts(props: IProps) {
    const { value, setValue } = props

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        e.target.value = value.replace(/[^0-9]/g, '')
    }

    const handleIncreaseValue = () => {
        setValue((prev: any) => (prev + 1) as number)
    }

    const handleDecreaseValue = () => {
        setValue((prev: any) => (prev - 1) as number)
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
