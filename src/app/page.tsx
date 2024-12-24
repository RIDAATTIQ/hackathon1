import Essentials from '@/components/Essentials';
import Layout from './layout';
import BestProduct from '@/components/BestProduct';
import Featured from '@/components/Featured';
import Gearup from '@/components/Gearup';
import ThirdBar from '@/components/Thirdbar';
import Shop from '@/components/Shop';
import Products from '@/app/AllProductsPage/Products'; // Add your new component here
import Head from 'next/head';
import ProductDetail from '@/components/Productdetail';
import CardPage from '@/app/CardPage/Card';
import LoginForm from '@/app/LoginForm/Form';
import Membership from '@/app/Membership/Form'
import ContactPage from "@/app/ContactPage/Maincontent"
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import { Sidebar } from 'lucide-react';
 // Make sure this path is correct

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Homepage - My Website</title>
        <meta name="description" content="Welcome to our homepage, featuring top products and exclusive deals." />
        <meta name="keywords" content="Homepage, Featured Products, Gear, Shop" />
        <meta name="author" content="Your Website Name" />
      </Head>

      <Layout>
        <main className= "bg-gray-50">
          {/* First Cover Page */}
          <section className="bg-#E5E5E5 text-black">
            <h1 className="text-2xl font-semibold">Welcome to our Homepage</h1>
    
          </section>

          <ThirdBar />

          <ProductDetail />
          <BestProduct />
          <Featured />
          <Gearup />
          <Shop />
          <Essentials />

          {/* Second Cover Page: All Products Section */}
          <section className="mt-8 py-8">
            <h2 className="text-center text-2xl font-semibold text-black mb-6">All Products</h2>
            <Products /> {/* Adding the Products component */}
          </section>




 
          <section className="bg-white text-black py-6 mt-8">
            <CardPage />
            <Footer/>

          </section>
          

    
            
            
          


          {/* Login Form Section */}
          
          <section className="bg-white text-black py-6 mt-8">
            <Header/>
            <Navbar/>
            <LoginForm />
            <Footer/>
          </section>

          {/* Membership Section */}
          <section className="bg-white text-black py-6 mt-8">
<Header/>
            <Navbar/>
          <Membership />  
          <Footer/>
          </section>

          <section className="bg-white text-black py-6 mt-8">
            <Header/>
            <Navbar/>
          <ContactPage />  
          <Sidebar/>
          <Footer/>
          </section>


        </main>
      </Layout>
    </>
  );
};

export default Homepage;
