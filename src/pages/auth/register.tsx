import Register from '@/components/Auth/Register'
import Head from 'next/head'

export default function RegisterPage() {
    return (
        <>
            <Head>
                <title>BookStore | Register</title>
            </Head>
            <div className="flex items-center justify-center mt-5">
                <Register />
            </div>
        </>
    )
}
