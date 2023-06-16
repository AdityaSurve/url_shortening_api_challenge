import AdvancedStatistics from "./components/AdvancedStatistics";
import Banner from "./components/Banner";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="overflow-x-hidden h-screen w-screen">
      <Navbar />
      <Banner />
      <AdvancedStatistics />
      <Boost />
      <Footer />
    </div>
  );
}
