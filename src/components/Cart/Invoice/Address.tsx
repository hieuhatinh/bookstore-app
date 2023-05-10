import { Box, Button, Divider, Paper, Typography } from '@mui/material'

export default function Address() {
    return (
        <Paper elevation={0} className="mb-3 p-3">
            <Box className="flex items-center justify-between">
                <Typography variant="body1" className="capitalize">
                    Giao tới
                </Typography>
                <Button variant="text">Thay đổi</Button>
            </Box>
            <Box className="flex items-center justify-start">
                <p className="font-bold text-sm">Nguyễn Trung Hiếu</p>
                <Divider className="m-1" orientation="vertical" flexItem />
                <p className="font-bold text-sm">1234567890</p>
            </Box>
            <Box>
                <p className="text-sm">
                    TDP Hầu Đền, Phường Trung Lương, Thị xã Hồng Lĩnh, Hà Tĩnh
                </p>
            </Box>
        </Paper>
    )
}
