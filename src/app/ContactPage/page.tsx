import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import MainContent from "./Maincontent";
import Sidebar from "../ContactPage/Sidebar"
import Footer from "@/components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-3">
          <MainContent />
        </div>

        <div className="p-4 bg-gray-100 border border-gray-400">
          <Sidebar />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default App;