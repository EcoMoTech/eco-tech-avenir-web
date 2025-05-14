
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Energie from "./pages/Energie";
import Mobilite from "./pages/Mobilite";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import JoinUs from "./pages/JoinUs";

// Service pages
import InstallationPhotovoltaique from "./pages/services/InstallationPhotovoltaique";
import MaintenanceCentrales from "./pages/services/MaintenanceCentrales";
import BornesRecharge from "./pages/services/BornesRecharge";
import ReparationVehicules from "./pages/services/ReparationVehicules";
import ConseilPhotovoltaique from "./pages/services/ConseilPhotovoltaique";
import AuditEfficacite from "./pages/services/AuditEfficacite";

// Energy solution pages
import SystemesResidentiels from "./pages/energie/SystemesResidentiels";
import StockageEnergie from "./pages/energie/StockageEnergie";
import EclairageSolaire from "./pages/energie/EclairageSolaire";
import PompesSolaires from "./pages/energie/PompesSolaires";

// Mobility pages
import MotosElectriques from "./pages/mobilite/MotosElectriques";
import TricyclesElectriques from "./pages/mobilite/TricyclesElectriques";
import ChargeursDomestiques from "./pages/mobilite/ChargeursDomestiques";
import StationsRecharge from "./pages/mobilite/StationsRecharge";

// Footer solution pages
import Residentiel from "./pages/solutions/Residentiel";
import Commercial from "./pages/solutions/Commercial";
import Industriel from "./pages/solutions/Industriel";
import VehiculesElectriques from "./pages/solutions/VehiculesElectriques";
import InfrastructureRecharge from "./pages/solutions/InfrastructureRecharge";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<AboutUs />} />
          <Route path="/energie" element={<Energie />} />
          <Route path="/mobilite" element={<Mobilite />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/join-us" element={<JoinUs />} />
          
          {/* Service Routes */}
          <Route path="/services/installation-photovoltaique" element={<InstallationPhotovoltaique />} />
          <Route path="/services/maintenance-centrales" element={<MaintenanceCentrales />} />
          <Route path="/services/bornes-recharge" element={<BornesRecharge />} />
          <Route path="/services/reparation-vehicules" element={<ReparationVehicules />} />
          <Route path="/services/conseil-photovoltaique" element={<ConseilPhotovoltaique />} />
          <Route path="/services/audit-efficacite" element={<AuditEfficacite />} />
          
          {/* Energy Solution Routes */}
          <Route path="/energie/systemes-residentiels" element={<SystemesResidentiels />} />
          <Route path="/energie/stockage-energie" element={<StockageEnergie />} />
          <Route path="/energie/eclairage-solaire" element={<EclairageSolaire />} />
          <Route path="/energie/pompes-solaires" element={<PompesSolaires />} />
          
          {/* Mobility Routes */}
          <Route path="/mobilite/motos-electriques" element={<MotosElectriques />} />
          <Route path="/mobilite/tricycles-electriques" element={<TricyclesElectriques />} />
          <Route path="/mobilite/chargeurs-domestiques" element={<ChargeursDomestiques />} />
          <Route path="/mobilite/stations-recharge" element={<StationsRecharge />} />
          
          {/* Footer Solution Routes */}
          <Route path="/solutions/residentiel" element={<Residentiel />} />
          <Route path="/solutions/commercial" element={<Commercial />} />
          <Route path="/solutions/industriel" element={<Industriel />} />
          <Route path="/solutions/vehicules-electriques" element={<VehiculesElectriques />} />
          <Route path="/solutions/infrastructure-recharge" element={<InfrastructureRecharge />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
