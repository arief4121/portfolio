import Head from 'next/head'
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skill from '../components/Skill';

export default function index() {
  return (
    <div className="font-dosis">
      <Head>
        <title>Muhammad Arief</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero/>
      <About/>
      <Skill/>
      <Services/>
      <Footer/>
    </div>
  )
}
