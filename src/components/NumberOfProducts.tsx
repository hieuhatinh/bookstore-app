import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export default function NumberOfProducts() {
    return (
        <>
            <Button className="button-custom-quantity">
                <AddIcon />
            </Button>
            <input
                type="text"
                value="1"
                className="input-custom-quantity text-center"
            />
            <Button className="button-custom-quantity">
                <RemoveIcon />
            </Button>
        </>
    )
}
