import { Box } from '@mui/material'
import Address from './Address'
import Promotion from './Promotion'
import Bill from './Bill'

export default function Invoice() {
    return (
        <Box>
            <Address />
            <Promotion />
            <Bill />
        </Box>
    )
}
