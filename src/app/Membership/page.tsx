import React from "react";
import Header from "@/components/Header"
import Navbar from "@/components/Navbar";
import Form from "./Form";

import Footer from "@/components/footer";
const App = () => {
  return (
    <div>
      {/* Assuming the header/navbar is imported here */}
    <Header/>
      <Navbar/>
      <Form  />
<Footer/>
      
    </div>
    
  );
};

export default App;