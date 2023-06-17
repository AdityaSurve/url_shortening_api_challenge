import {
  Navbar,
  Banner,
  AdvancedStatistics,
  Boost,
  Footer,
} from "./components";

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
