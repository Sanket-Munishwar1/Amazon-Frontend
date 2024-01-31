import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from './Navbar';
import Card from './Card';
import axios from '../axios';


function Home () {

  const [products, setProducts] = useState("");
  
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/products/get");
      console.log(data)
      setProducts(data);
    };
    fetchdata();
  }, []);
  return (
    <section>
      <Navbar />
      <div className="banner">
        <img src="./banner.jpg" alt="" />
        <img src="./mobile_banner.jpg" alt="" />
      </div>

      <div className="main">
        {products &&
          products?.data.map((product) => (
            <Card
              id={product._id}
              image={product.imageURL}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          ))}
      </div>
    </section>
  )
}

export default Home
