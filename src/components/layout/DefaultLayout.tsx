import React, { ReactElement } from 'react'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'

import HeaderLayout from '@/components/main/HeaderLayout'
import Sidebar from '@/components/main/Sidebar'
import Footer from '@/components/main/Footer'

interface Props {
    children: ReactElement
}

export default function DefaultLayout({ children, ...props }: Props) {
    return (
        <>
            <HeaderLayout />
            <Container maxWidth="lg" className="mt-header-content h-full">
                <Grid container spacing={2}>
                    <Grid item xs={3} className="w-sidebar-width">
                        <Sidebar />
                    </Grid>
                    <Grid item xs={9}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
