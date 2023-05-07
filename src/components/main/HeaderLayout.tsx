import Link from 'next/link'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'

import routes from '@/routes'
import Search from './components/Search'

function HeaderLayout() {
    return (
        <Container className="flex items-center justify-between">
            <div className="flex items-center">
                <Link href={routes.home} className="me-5">
                    <h2 className="font-semibold text-xl text-rose-600">
                        BookStore
                    </h2>
                </Link>

                <Search />
            </div>

            <div className="flex align-items">
                <Link href={routes.login}>
                    <Button variant="text">Đăng nhập</Button>
                </Link>
                <Divider
                    className="mx-1"
                    orientation="vertical"
                    variant="middle"
                    flexItem
                />
                <Link href={routes.register}>
                    <Button variant="text">Đăng ký</Button>
                </Link>
            </div>
        </Container>
    )
}

export default HeaderLayout
