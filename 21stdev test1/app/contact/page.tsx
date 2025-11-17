export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-primary-200">Contact & Support</p>
          <h1 className="text-4xl font-bold mb-4">We&apos;re here 24/7 for every trip question</h1>
          <p className="text-primary-100">
            Call, email, live chat or drop by our travel lounge. We answer within minutes.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Message us</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full name" className="px-4 py-3 border rounded-md" />
              <input type="email" placeholder="Email address" className="px-4 py-3 border rounded-md" />
              <input type="tel" placeholder="Phone (optional)" className="px-4 py-3 border rounded-md md:col-span-2" />
              <select className="px-4 py-3 border rounded-md md:col-span-2">
                <option>Select topic</option>
                <option>Booking support</option>
                <option>Payment & invoices</option>
                <option>Custom itinerary</option>
                <option>Media / partnerships</option>
              </select>
              <textarea placeholder="How can we help?" className="px-4 py-3 border rounded-md md:col-span-2 h-32"></textarea>
              <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors md:col-span-2">
                Send message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "How do I secure a booking?", a: "Pay a 20% deposit to lock in dates; balance due 45 days prior." },
                { q: "Can I cancel or reschedule?", a: "Most trips include flexible rebooking up to 30 days before departure." },
                { q: "Do you assist with visas & insurance?", a: "Yes. We provide visa letters, insurance partners and pre-travel checklists." }
              ].map((faq) => (
                <div key={faq.q}>
                  <p className="font-semibold text-gray-900">{faq.q}</p>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact details</h3>
            <p className="text-gray-700">Phone: +1 (800) 555-0199</p>
            <p className="text-gray-700">Email: hello@voyagevista.com</p>
            <p className="text-gray-700">Live chat: Available 24/7</p>
            <p className="text-gray-700 mt-4">HQ: 245 Market Street, Suite 500<br/>San Francisco, CA 94105</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Need urgent help?</h3>
            <p className="text-gray-600 mb-4">Tap the floating chat widget or text our support line at +1 (800) 555-1290.</p>
            <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors">
              Start live chat
            </button>
          </div>
          <div className="bg-primary-100 border border-primary-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">Newsletter</h3>
            <p className="text-primary-800 mb-4">Get our latest deals & travel tips.</p>
            <div className="flex flex-col space-y-3">
              <input type="email" placeholder="Email address" className="px-4 py-3 border rounded-md" />
              <button className="bg-primary-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


