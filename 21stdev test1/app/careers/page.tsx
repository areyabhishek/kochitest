const roles = [
  {
    title: "Senior Travel Designer (Europe)",
    location: "Remote (EU)",
    type: "Full-time",
    description: "Curate luxury and group itineraries across Mediterranean & Alpine routes. 5+ years experience."
  },
  {
    title: "Cruise Product Manager",
    location: "Singapore",
    type: "Full-time",
    description: "Own Asia cruise portfolio, manage supplier negotiations and onboard experiences."
  },
  {
    title: "Customer Experience Lead",
    location: "San Francisco / Hybrid",
    type: "Full-time",
    description: "Oversee 24/7 concierge team and implement service playbooks."
  }
];

export default function CareersPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join VoyageVista</h1>
          <p className="text-gray-600">
            We&apos;re a distributed team of travel experts, product managers and creatives passionate about group travel.
          </p>
        </div>
        <div className="space-y-6">
          {roles.map((role) => (
            <div key={role.title} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">{role.title}</h2>
                  <p className="text-gray-600">{role.description}</p>
                </div>
                <div className="text-sm text-gray-500">
                  <p>{role.location}</p>
                  <p>{role.type}</p>
                </div>
              </div>
              <button className="mt-4 bg-primary-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                Apply now
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-600">Don&apos;t see the perfect role? Email talent@voyagevista.com with your CV.</p>
        </div>
      </div>
    </div>
  );
}


