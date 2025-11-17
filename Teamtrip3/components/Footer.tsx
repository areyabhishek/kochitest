export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TEAMTRIP</h3>
            <p className="text-gray-400">
              Unforgettable offsites for Indian companies. Plan your next team event with ease.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Offsite Planning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Corporate Events</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conferences</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Workshops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#why-teamtrip" className="hover:text-white transition-colors">Why Teamtrip</a></li>
              <li><a href="#offsite-types" className="hover:text-white transition-colors">Offsite Types</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 | Teamtrip
            </p>
            <div className="text-center">
              <p className="text-gray-400 mb-2">Are you ready?</p>
              <a
                href="#contact"
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Start Planning Your Unforgettable Experience Today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

