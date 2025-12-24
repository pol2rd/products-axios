import React, { useState, useEffect } from 'react';
import axios, { all } from 'axios';
import '../assets/css/common.css';
import '../assets/css/main.css';
import Navbar from '../components/ui-elements/Navbar';
import DropDownFilter from '../components/filters/DropDownFilter';
import Loading from '../components/ui-elements/Loading';
import Card from '../components/product-components/Card';
import { Product } from '../types';
import InputFilter from '../components/filters/InputFilter';

const Home: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const allProductsCategory = "All";
  const [selectedCategory, setSelectedCategory] = useState<string>(allProductsCategory);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const baseURL = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(baseURL)
            .then((response) => {
              setAllProducts(response.data)
              setProducts(response.data)
              setLoading(false)
            })
          .catch((error) => {
            setError(error)
            setLoading(false)
          })
  },[])

  const showFilterByCategory = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    const filteredProducts = category === allProductsCategory? allProducts : allProducts.filter((product) => product.category === category)
    setProducts(filteredProducts)
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className='error-screen'>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className='filters'>
        <div className='container'>
          <DropDownFilter
            onClick={showFilterByCategory}
            isOpen={isDropdownOpen}
            filterByGenre={filterByCategory}
            genre={selectedCategory}
          />
        </div>
      </section>
      <main className='main'>
        <div className='container'>
          <section>
            <div className='products-grid' id='products-list'>
              {products.map((product) => { 
                return <Card key={product.id} product={product}></Card>
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
