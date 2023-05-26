import { AppBar, Container, Toolbar } from '@mui/material'
import Link from 'next/link'

import routes from '@/routes'

function HeaderAuth() {
    return (
        <AppBar className="bg-slate-200 pb-1">
            <Toolbar>
                <Container
                    maxWidth="lg"
                    className="flex items-center justify-between"
                >
                    <Link
                        href={routes.home}
                        className="font-semibold text-xl text-logo"
                    >
                        BookStore
                    </Link>
                    <Link href="" className="text-orange-600">
                        Cần giúp đỡ?
                    </Link>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderAuth
