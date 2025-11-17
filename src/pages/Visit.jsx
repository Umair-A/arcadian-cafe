import { useState } from 'react'
import { BRAND, FAQS } from '../data/brand'
import { LOCATIONS } from '../data/locations'
import { getReadableHours } from '../utils/hours'

const reasons = ['Reservation', 'Event', 'Catering', 'General Question']

export function Visit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: reasons[0],
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 12) {
      nextErrors.message = 'Tell us a bit more so we can help.'
    }
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSuccess(false)
      return
    }
    setTimeout(() => {
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: reasons[0],
        message: ''
      })
    }, 400)
  }

  return (
    <div className="bg-cloud py-16">
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="eyebrow">Plan Your Visit</p>
          <h1 className="text-4xl">Find us across Lahore.</h1>
          <p className="text-lg text-forest/80">
            {BRAND.phone} · {BRAND.email}
          </p>
          <p className="text-sm text-forest/70">
            Make a reservation: <a href={`tel:${BRAND.reservationPhone}`} className="text-gold font-semibold hover:underline">{BRAND.reservationPhone}</a>
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Locations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((location) => (
              <div key={location.id} className="card p-6 space-y-4">
                <h3 className="text-xl font-semibold">{location.name}</h3>
                <p className="text-sm text-forest/80">{location.address}</p>
                <iframe
                  title={`${location.name} on Google Maps`}
                  loading="lazy"
                  className="h-48 w-full rounded-xl border-0"
                  src={location.mapEmbed}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Hours</p>
              <div className="mt-4 space-y-2 text-sm text-forest/80">
                {getReadableHours().map((entry) => (
                  <p key={entry.day} className="flex justify-between gap-4">
                    <span className="capitalize">{entry.day}</span>
                    <span>{entry.label}</span>
                  </p>
                ))}
              </div>
            </div>


            <div className="card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">FAQ</p>
              <div className="mt-4 space-y-4">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="rounded-xl border border-forest/10 p-4">
                    <summary className="text-sm font-semibold text-forest">{faq.question}</summary>
                    <p className="mt-2 text-sm text-forest/80">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <form className="card p-8" onSubmit={handleSubmit} noValidate>
            <div className="mb-8 space-y-2">
              <p className="eyebrow">Say Hello</p>
              <h2 className="text-3xl font-semibold">Contact & Private Events</h2>
              <p className="text-sm text-forest/70">
                Have a question or want to book a private event? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-sm font-semibold text-forest">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 ${
                    errors.name
                      ? 'border-red-300 bg-red-50 focus-visible:border-red-400 focus-visible:ring-red-200'
                      : 'border-forest/20 bg-white focus-visible:border-forest focus-visible:ring-forest/20'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1`}
                  aria-invalid={Boolean(errors.name)}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                    <span>⚠</span>
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-semibold text-forest">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 ${
                    errors.email
                      ? 'border-red-300 bg-red-50 focus-visible:border-red-400 focus-visible:ring-red-200'
                      : 'border-forest/20 bg-white focus-visible:border-forest focus-visible:ring-forest/20'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1`}
                  aria-invalid={Boolean(errors.email)}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                    <span>⚠</span>
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-sm font-semibold text-forest">
                    Phone <span className="text-xs font-normal text-forest/60">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                    className="w-full rounded-xl border border-forest/20 bg-white px-4 py-3 text-sm transition-all duration-200 focus-visible:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/20 focus-visible:ring-offset-1"
                    placeholder="+92 321 9555400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="reason" className="block text-sm font-semibold text-forest">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    value={formData.reason}
                    onChange={(event) => setFormData((prev) => ({ ...prev, reason: event.target.value }))}
                    className="w-full rounded-xl border border-forest/20 bg-white px-4 py-3 text-sm transition-all duration-200 focus-visible:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/20 focus-visible:ring-offset-1"
                  >
                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm font-semibold text-forest">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  className={`w-full resize-none rounded-xl border px-4 py-3 text-sm transition-all duration-200 ${
                    errors.message
                      ? 'border-red-300 bg-red-50 focus-visible:border-red-400 focus-visible:ring-red-200'
                      : 'border-forest/20 bg-white focus-visible:border-forest focus-visible:ring-forest/20'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1`}
                  aria-invalid={Boolean(errors.message)}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                    <span>⚠</span>
                    <span>{errors.message}</span>
                  </p>
                )}
                {!errors.message && formData.message && (
                  <p className="mt-1.5 text-xs text-forest/60">
                    {formData.message.length} characters
                  </p>
                )}
              </div>

              {success && (
                <div className="rounded-xl border-2 border-forest/20 bg-forest/5 p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div className="flex-1">
                      <p className="font-semibold text-forest">Message sent successfully!</p>
                      <p className="mt-1 text-sm text-forest/70">
                        We'll reply within one business day. Check your email for confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full py-3.5 text-base font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

