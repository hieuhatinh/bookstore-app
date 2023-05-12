import Register from '@/components/Auth/Register'
import Head from 'next/head'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import AuthLayout from '@/components/layout/AuthLayout'

const RegisterPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Register | BookStore</title>
            </Head>
            <div className="flex items-center justify-center mt-5">
                <Register />
            </div>
        </>
    )
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout title="Register">{page}</AuthLayout>
}

export default RegisterPage
