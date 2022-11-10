import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Content from '../components/content'
import Pitch from '../components/pitch'
import Buy from '../components/buy'
import CZ from '../components/cz'
import Last from '../components/last'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Pitch />
      <Buy />
      <CZ />
      <Last />
      <Footer />
    </div>
  )
}
