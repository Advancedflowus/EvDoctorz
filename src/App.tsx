import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./layouts/ScrollToTop";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Services from "./pages/Services";
import LocationAmesbury from "./pages/LocationAmesbury";
import OurTeam from "./pages/OurTeam";
import MaintenanceRepair from "./pages/MaintenanceRepair";
import Customization from "./pages/Customization";
import AnnualServices from "./subpages/AnnualServices";
import Alignment from "./subpages/Alignment";
import ElectricalRepair from "./subpages/ElectricalRepair";
import Hvac from "./subpages/HVAC";
import Suspension from "./subpages/Suspension";
import Wheel from "./subpages/Wheel";
import Performance from "./subpages/Permorfance";
import Accesories from "./subpages/Accesories";
import Hardware from "./subpages/Hardware";
import Battery from "./subpages/BatteryUpgrade";
import VehicleConversion from "./pages/VehicleConversion";
import Tires from "./subpages/Tires";
import Tesla from "./subpages/Tesla";
import CTires from "./subpages/CustomTires";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/amesbury" element={<LocationAmesbury />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/services/maintenance-repair" element={<MaintenanceRepair />} />
          <Route path="/services/customization" element={<Customization />} />
          <Route path="/services/maintenance-repair/annual-services" element={<AnnualServices />} />
          <Route path="/services/maintenance-repair/alignment" element={<Alignment />} />
          <Route path="/services/maintenance-repair/voltage" element={<Wheel />} />
          <Route path="/services/maintenance-repair/hvac" element={<Hvac />} />
          <Route path="/services/maintenance-repair/replacement" element={<ElectricalRepair />} />
          <Route path="/services/maintenance-repair/suspension" element={<Suspension />} />
          <Route path="/services/maintenance-repair/tires" element={<Tires />} />
          <Route path="/services/customization/performance" element={<Performance />} />
          <Route path="/services/customization/accesories" element={<Accesories />} />
          <Route path="/services/customization/hardware" element={<Hardware />} />
          <Route path="/services/customization/battery" element={<Battery />} />
          <Route path="/services/customization/tesla" element={<Tesla />} />
          <Route path="/services/customization/custom-tires-wheels" element={<CTires />} />
          <Route path="/services/comercial-account" element={<VehicleConversion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;