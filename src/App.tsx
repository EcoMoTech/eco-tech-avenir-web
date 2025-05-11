
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

// Service pages
import InstallationPhotovoltaique from "./pages/services/InstallationPhotovoltaique";
import MaintenanceCentrales from "./pages/services/MaintenanceCentrales";
import BornesRecharge from "./pages/services/BornesRecharge";
import ReparationVehicules from "./pages/services/ReparationVehicules";
import ConseilPhotovoltaique from "./pages/services/ConseilPhotovoltaique";
import AuditEfficacite from "./pages/services/AuditEfficacite";

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
          
          {/* Service Routes */}
          <Route path="/services/installation-photovoltaique" element={<InstallationPhotovoltaique />} />
          <Route path="/services/maintenance-centrales" element={<MaintenanceCentrales />} />
          <Route path="/services/bornes-recharge" element={<BornesRecharge />} />
          <Route path="/services/reparation-vehicules" element={<ReparationVehicules />} />
          <Route path="/services/conseil-photovoltaique" element={<ConseilPhotovoltaique />} />
          <Route path="/services/audit-efficacite" element={<AuditEfficacite />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
