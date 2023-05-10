import React, { ReactNode } from 'react'
import Container from '@mui/material/Container'

import HeaderLayout from '@/components/main/HeaderLayout'
import Footer from '@/components/main/Footer'

interface Props {
    children: ReactNode
}

export default function HeaderOnly({ children, ...props }: Props) {
    return (
        <>
            <HeaderLayout />
            <Container maxWidth="lg" className="mt-header-content h-full">
                {children}
            </Container>
            <Footer />
        </>
    )
}
