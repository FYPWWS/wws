import FireWatcher from "../components/FireWatcher"
import Head from 'next/head'

export default function FireWatcherPage(){
    return(
        <>
            <Head>
                <title>WWS | Fire Watcher</title>
                <meta name="keyword" content="WWS"/>
            </Head>
            <FireWatcher/>
        </>
    );
}