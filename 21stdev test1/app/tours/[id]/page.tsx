export default function TourDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold mb-2">Tour Detail</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Trip #{params.id} coming soon</h1>
        <p className="text-gray-600">
          Detailed itineraries with day-by-day breakdowns, pricing, inclusions and availability will live here.
        </p>
      </div>
    </div>
  );
}


