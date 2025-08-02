export default function Services() {
  return (
    <section className="max-w-5xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-center text-blue-700">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Freight Forwarding</h2>
          <p className="text-gray-700">
            Efficient and reliable freight forwarding services by air, sea, and land ensuring timely delivery worldwide.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Customs Brokerage</h2>
          <p className="text-gray-700">
            Expert handling of customs clearance processes to reduce delays and ensure compliance with international regulations.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Supply Chain Management</h2>
          <p className="text-gray-700">
            End-to-end supply chain solutions tailored to optimize your business logistics and inventory management.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Warehousing & Distribution</h2>
          <p className="text-gray-700">
            Secure warehousing facilities and efficient distribution networks to keep your products safe and delivered on time.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Consulting & Compliance</h2>
          <p className="text-gray-700">
            Industry expertise to help your business navigate complex import-export regulations and optimize trade operations.
          </p>
        </div>
      </div>
    </section>
  )
}
