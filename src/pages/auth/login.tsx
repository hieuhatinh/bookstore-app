import Login from '@/components/Auth/Login'
import Head from 'next/head'

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>BookStore | Login</title>
            </Head>
            <div className="flex items-center justify-center mt-5">
                <Login />
            </div>
        </>
    )
}
