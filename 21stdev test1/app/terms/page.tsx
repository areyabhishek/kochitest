export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Privacy</h1>
          <p className="text-gray-600">Updated July 2024</p>
        </div>
        <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Booking Conditions</h2>
          <p className="text-gray-600">Deposits are non-refundable but transferable. Full payment due 45 days before departure. Supplier terms may override our policy.</p>
        </section>
        <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Privacy</h2>
          <p className="text-gray-600">We collect the minimum personal data needed to operate your booking. Data is encrypted and never sold to third parties.</p>
        </section>
        <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Travel Insurance</h2>
          <p className="text-gray-600">Proof of travel insurance covering medical and evacuation is required for all departures.</p>
        </section>
        <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="text-gray-600">Questions? Email compliance@voyagevista.com.</p>
        </section>
      </div>
    </div>
  );
}


