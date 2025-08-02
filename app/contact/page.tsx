'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // For demo, just show submitted state
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-700">Contact Us</h1>
      <p className="text-center text-gray-700">
        Reach out to ContinentalShift for inquiries, quotes, or support.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6 space-y-2 text-gray-700">
          <p><strong>Email:</strong> continentalshift@gmail.com</p>
          <p><strong>Phone:</strong> +44 7818 325573</p>
          <p><strong>WhatsApp:</strong> 8446779319</p>
          <p><strong>Address:</strong> Pune, Maharashtra, India</p>
          <p><strong>Socials:</strong> <a href="https://linkedin.com/in/contientashift" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>, <a href="https://instagram.com/contientashift" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">Instagram</a></p>
        </div>

        {submitted ? (
          <p className="text-green-600 font-semibold text-center">Thank you for contacting us! We will get back to you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
