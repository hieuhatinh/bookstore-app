import React, { ReactNode } from 'react'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'

import HeaderLayout from '@/components/main/HeaderLayout'
import Sidebar from '@/components/main/Sidebar'

interface Props {
    children: ReactNode
}

export default function Layout({ children, ...props }: Props) {
    return (
        <>
            <HeaderLayout />
            <Container maxWidth="lg" className="relative top-header-content">
                <Grid container>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10}>
                        <main>{children}</main>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
