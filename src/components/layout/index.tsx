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
                <Grid container spacing={2}>
                    <Grid item xs={3} className="fixed w-sidebar-width">
                        <Sidebar />
                    </Grid>
                    <Grid item xs={9} className="relative left-[300px]">
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
