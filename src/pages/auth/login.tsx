import Login from '@/components/Auth/Login'
import Head from 'next/head'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import AuthLayout from '@/components/layout/AuthLayout'

const LoginPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Login | BookStore</title>
            </Head>
            <div className="flex items-center justify-center mt-5">
                <Login />
            </div>
        </>
    )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout title="Login">{page}</AuthLayout>
}

export default LoginPage
