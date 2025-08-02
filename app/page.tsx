import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedCounter from './components/AnimatedCounter'

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/hero-bg.jpg"
          alt="Global shipping"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            ContinentalShift
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-xl drop-shadow-md">
            Your trusted partner in global import-export and logistics solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-3xl font-bold text-blue-700">
            <AnimatedCounter target={500} />+
          </h3>
          <p className="mt-2 font-semibold">Satisfied Clients</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-3xl font-bold text-blue-700">
            <AnimatedCounter target={1200} />+
          </h3>
          <p className="mt-2 font-semibold">Successful Shipments</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-3xl font-bold text-blue-700">
            <AnimatedCounter target={60} />+
          </h3>
          <p className="mt-2 font-semibold">Countries Served</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          What We Offer
        </h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-center leading-relaxed">
          At ContinentalShift, we provide seamless import and export services,
          handling customs clearance, freight forwarding, supply chain
          management, and warehousing solutions. Our extensive global network
          ensures your goods move efficiently across borders.
        </p>
      </section>
    </section>
  )
}
