import Forecast from "../components/Forecast"
import Head from 'next/head'

export default function ForecastPage(){
    return(
        <>
            <Head>
                <title>WWS | Forecast</title>
                <meta name="keyword" content="WWS"/>
            </Head>
            <Forecast/>
        </>
    );
}