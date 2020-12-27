import Head from 'next/head'
import { useRouter } from 'next/router'

function Thanks() {
    const router = useRouter();
    const { oid } = router.query;

    return (
        <div className="wrapper cart">
            <Head>
                <title>😊 Thanks | 💡 My App</title>
            </Head>
            <div className="container">
                <h1>Thanks! Your order <span>{oid}</span> was completed.</h1>
                <p>Please check your inbox for confirmation and full order details.</p>
                <p>Return <a href="/">home</a>.</p>
            </div>
        </div>
    );
}

export default Thanks;