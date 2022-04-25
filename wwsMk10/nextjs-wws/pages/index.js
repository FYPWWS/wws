import Head from 'next/head'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <>
      <Head>
          <title>WWS | Intro</title>
          <meta name="keyword" content="WWS"/>
      </Head>
      <Intro/>
    </>
  );
}
