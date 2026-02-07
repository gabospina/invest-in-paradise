// client/src/App.tsx
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import the helper
import OurStory from "./pages/OurStory-EN";
import HomePage from "./pages/Home";
import ForRetirees from "./pages/ForRetirees-EN";
import RetireesMockup from "./pages/RetireesMockup";
import Families2 from "./pages/Families-2";
import ForFamilies from "./pages/ForFamilies-EN";
import VillasProject from "./pages/VillasProject-EN";
import VillaBlueprints from "./components/VillaBlueprints";
import NotFound from "./pages/NotFound";

import FAQ from "./pages/FAQ-EN";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// Global Components
import WhatsAppButton from "./components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

// Fix for Leaflet default marker icons
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Place it here, above the Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/for-retirees" element={<ForRetirees />} />
        <Route path="/RetireesMockup" element={<RetireesMockup />} />
        <Route path="/for-families" element={<ForFamilies />} />
        <Route path="/families-2" element={<Families2 />} />
        <Route path="/villas-project" element={<VillasProject />} />
        <Route path="/villa-blueprints" element={<VillaBlueprints />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default App;