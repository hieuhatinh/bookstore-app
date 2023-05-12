import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

interface IProps {
    title: string
}

function HeaderAuth(props: IProps) {
    const { title } = props

    return (
        <AppBar className="bg-slate-200 pb-1">
            <Toolbar>
                <Container
                    maxWidth="lg"
                    className="flex items-center justify-between"
                >
                    <Typography
                        variant="h2"
                        className="font-semibold text-xl text-logo"
                    >
                        BookStore {title}
                    </Typography>
                    <Link href="" className="text-orange-600">
                        Cần giúp đỡ?
                    </Link>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderAuth
