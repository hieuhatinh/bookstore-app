import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Book Store</title>
            </Head>
            <main>
                <Link href="/about">About</Link>
            </main>
        </>
    )
}
