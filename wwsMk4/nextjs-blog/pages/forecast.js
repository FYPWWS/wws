import Forecast from "../components/Forecast"
import Head from 'next/head'

export default function ForecastPage(){
    return(
        <>
            <Head>
                <title>Forecast</title>
            </Head>
            <Forecast/>
        </>
    );
}