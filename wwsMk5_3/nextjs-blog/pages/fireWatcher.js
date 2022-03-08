import Head from 'next/head'
import FireWatcher from "../components/FireWatcher"

export default function FireWatcherPage(){
    return(
        <>
            <Head>
                <title>WWS | FireWatcher</title>
                <meta name="keyword" content="WWS"/>
            </Head>
            <FireWatcher/>
        </>
    );
}