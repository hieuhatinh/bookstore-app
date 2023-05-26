import Head from 'next/head'
import { ReactElement, useEffect } from 'react'
import { redirect, useRouter } from 'next/navigation'

import { NextPageWithLayout } from '@/pages/_app'
import Login from '@/components/Auth/Login'
import AuthLayout from '@/components/layout/AuthLayout'
import { userProfileLocalStorage } from '@/constants'
import routes from '@/routes'

const LoginPage: NextPageWithLayout = () => {
    // useEffect(() => {
    //     const user = localStorage.getItem(userProfileLocalStorage)
    //     if (user) {
    //         redirect(routes.home)
    //     }
    // }, [])

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
    return <AuthLayout>{page}</AuthLayout>
}

export default LoginPage
