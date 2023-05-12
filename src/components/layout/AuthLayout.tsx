import React, { ReactNode } from 'react'
import Container from '@mui/material/Container'
import HeaderAuth from '@/components/main/HeaderAuth'

interface Props {
    children: ReactNode
    title: string
}

export default function AuthLayout({ children, title, ...props }: Props) {
    return (
        <>
            <HeaderAuth title={title} />
            <Container maxWidth="lg" className="mt-header-content h-full">
                {children}
            </Container>
        </>
    )
}
