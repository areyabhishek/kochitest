import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import TripDetailsPage from './pages/TripDetailsPage';
import EuropeCruisesPage from './pages/EuropeCruisesPage';
import AsiaCruisesPage from './pages/AsiaCruisesPage';
import FamilyTripsPage from './pages/FamilyTripsPage';
import BachelorTripsPage from './pages/BachelorTripsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/trip/:slug" element={<TripDetailsPage />} />
          <Route path="/cruises/europe" element={<EuropeCruisesPage />} />
          <Route path="/cruises/asia" element={<AsiaCruisesPage />} />
          <Route path="/trips/family" element={<FamilyTripsPage />} />
          <Route path="/trips/bachelor-bachelorette" element={<BachelorTripsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin route without header/footer */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Main site routes with header/footer */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
