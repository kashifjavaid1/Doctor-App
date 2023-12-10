import Image from 'next/image'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import OurDoctors from './components/OurDoctors'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Section1/>
    <h1 className="py-20 text-2xl font-bold text-center">
                OurDoctors
            </h1>
   <div className='w-[70%] mx-auto grid md:grid-cols-2 lg:grid-cols-3'>
   
   <OurDoctors/>
   <OurDoctors/>
   <OurDoctors/>
   <OurDoctors/>
   <OurDoctors/>
   <OurDoctors/>
   <OurDoctors/>
   
   </div>
   
    </>
  )
}
