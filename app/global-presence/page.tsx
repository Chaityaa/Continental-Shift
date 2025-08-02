import Image from 'next/image'

const locations = [
  { country: 'United States', flag: '/images/flags/us.png' },
  { country: 'United Kingdom', flag: '/images/flags/uk.png' },
  { country: 'India', flag: '/images/flags/in.png' },
  { country: 'Germany', flag: '/images/flags/de.png' },
  { country: 'China', flag: '/images/flags/cn.png' },
  { country: 'Brazil', flag: '/images/flags/br.png' },
]

export default function GlobalPresence() {
  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Our Global Presence
      </h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
        With offices and partners across continents, ContinentalShift ensures your shipments reach every corner of the world with efficiency and reliability.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
        {locations.map(({ country, flag }) => (
          <div
            key={country}
            className="flex items-center space-x-4 bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow"
          >
            <Image src={flag} alt={`${country} flag`} width={40} height={30} />
            <span className="font-semibold text-gray-800">{country}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
