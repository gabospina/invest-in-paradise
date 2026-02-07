// client/src/App.tsx
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/Home-EN";
import HomePageFR from "./pages/Home-FR";
import HomePageSP from "./pages/Home-SP";

import OurStory from "./pages/OurStory-EN";
import OurStoryFR from "./pages/OurStory-FR";
import OurStorySP from "./pages/OurStory-SP";

import ForRetirees from "./pages/ForRetirees-EN";
import PourRetires from "./pages/ForRetirees-FR";
import ParaJubilados from "./pages/ForRetirees-SP";

import ForFamilies from "./pages/ForFamilies-EN";
import PourFamilles from "./pages/ForFamilies-FR";
import ParaFamilias from "./pages/ForFamilies-SP";

import VillasProject from "./pages/VillasProject-EN";
import ProjetVillas from "./pages/VillasProject-FR";
import ProyectoVillas from "./pages/VillasProject-SP";

import VillaBlueprints from "./components/VillaBlueprints";
import NotFound from "./pages/NotFound";

import FAQ from "./pages/FAQ-EN";
import FAQFR from "./pages/FAQ-FR";
import FAQSP from "./pages/FAQ-SP";
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />

        <Route path="/en" element={<HomePage />} />
        <Route path="/fr" element={<HomePageFR />} />
        <Route path="/es" element={<HomePageSP />} />

        <Route path="/our-story" element={<OurStory />} />
        <Route path="/notre-histoire" element={<OurStoryFR />} />
        <Route path="/nuestra-historia" element={<OurStorySP />} />

        {/* Modern styled pages */}
        <Route path="/for-retirees" element={<ForRetirees />} />
        <Route path="/pour-retires" element={<PourRetires />} />
        <Route path="/para-jubilados" element={<ParaJubilados />} />

        <Route path="/for-families" element={<ForFamilies />} />
        <Route path="/pour-familles" element={<PourFamilles />} />
        <Route path="/para-familias" element={<ParaFamilias />} />

        <Route path="/villas-project" element={<VillasProject />} />
        <Route path="/projet-villas" element={<ProjetVillas />} />
        <Route path="/proyecto-villas" element={<ProyectoVillas />} />

        <Route path="/villa-blueprints" element={<VillaBlueprints />} />

        <Route path="/faq-en" element={<FAQ />} />
        <Route path="/faq-fr" element={<FAQFR />} />
        <Route path="/faq-sp" element={<FAQSP />} />

        <Route path="/faq" element={<Navigate to="/faq-en" replace />} />

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