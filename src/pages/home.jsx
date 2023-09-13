import React from 'react'
import Header from '../components/homeComponents/header/header'
import SectionTwo from '../components/homeComponents/secondSection/sectionTwo'
import SectionThree from '../components/homeComponents/thirdsection/sectionThree'
import Faqs from '../components/homeComponents/faqSection/faqs'
import About from '../components/homeComponents/aboutSection/about'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main>
        <Header />
        <SectionTwo />
        <SectionThree />
        <Faqs />
        <About />
        <Footer />
    </main>
  )
}
