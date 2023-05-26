import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head'

import routes from '@/routes'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page Not Found | BookStore</title>
            </Head>
            <Box className="flex flex-col justify-center items-center h-screen w-screen">
                <Typography variant="h4" className="text-xl normal-case mb-3">
                    Trang không tồn tại
                </Typography>
                <Button
                    href={routes.home}
                    variant="contained"
                    className="normal-case"
                >
                    Về trang chủ
                </Button>
            </Box>
        </>
    )
}

export default NotFound
