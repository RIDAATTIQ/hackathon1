// src/components/ProductList.tsx
import React from 'react'
// src/pages/ProductsPage.tsx

import Header from '@/components/Header';

import Navbar from '../../components/Navbar';

import Sidebar from './Sidebar';
import FilterSort from './FilterSort';
import Footer from '@/components/footer';

const ProductsPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Navbar/>
      <FilterSort />
    
      <Sidebar />
      
      <Footer/>
    </div>
  );
};

export default ProductsPage;