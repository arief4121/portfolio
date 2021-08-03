import Head from 'next/head'
import Hero from '../components/Hero';

export default function index() {
  return (
    <div className="font-dosis">
      <Head>
        <title>Muhammad Arief</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero/>
    </div>
  )
}
