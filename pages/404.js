import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) // go backward in history
            // router.go(1) // go forward in history
            router.push('/')
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>Coding Hell | 404</title>
                <meta name="keywords" content="Coding" />
            </Head>
            <div className="not-found">
                <h1>Oooops.....</h1>
                <h2>The page cannot be found.</h2>
                <p>Go back to the <Link href="/"><a>Home Page</a></Link> </p>
            </div>
        </>
    );
}

export default NotFound;