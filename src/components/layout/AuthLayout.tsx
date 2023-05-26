import React, { ReactNode } from 'react'
import Container from '@mui/material/Container'
import HeaderAuth from '@/components/main/HeaderAuth'

interface Props {
    children: ReactNode
}

export default function AuthLayout({ children, ...props }: Props) {
    return (
        <>
            <HeaderAuth />
            <Container maxWidth="lg" className="mt-header-content h-full">
                {children}
            </Container>
        </>
    )
}
