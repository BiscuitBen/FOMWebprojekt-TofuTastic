
import Head from 'next/head';
import Datenschutz from '../components/Datenschutz.jsx';
import Footer from '../components/Footer.jsx';

export default function Datenschutzerklearung() {
  return (
    <div className="countainer mx-auto px-10 mb-8 ">
      <Head>
        <title>TofuTastic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Datenschutz />
     
      <Footer/>
    </div>
  )
}
