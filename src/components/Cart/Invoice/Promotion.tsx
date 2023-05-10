import { Button, Paper, Typography } from '@mui/material'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'

export default function Promotion() {
    return (
        <Paper elevation={0} className="mb-3 p-3">
            <Typography variant="body1" className="text-sm font-bold">
                BookStore khuyến mãi
            </Typography>
            <Button className="flex items-center justify-start">
                <ConfirmationNumberIcon />
                <span className="h-3"></span>
                <Typography className="lowercase text-xs whitespace-nowrap ms-1">
                    Chọn hoặc nhập mã khuyến mãi khác
                </Typography>
            </Button>
        </Paper>
    )
}
