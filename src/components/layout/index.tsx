import React, { ReactNode } from 'react'
import Container from '@mui/material/Container'

import HeaderLayout from '@/components/main/HeaderLayout'

interface Props {
    children: ReactNode
}

export default function Layout({ children, ...props }: Props) {
    return (
        <>
            <div className="bg-slate-200 pb-4 pt-2">
                <HeaderLayout />
            </div>
            <Container maxWidth="lg">
                <main>{children}</main>
            </Container>
        </>
    )
}
