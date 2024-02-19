import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PiHandbagSimpleLight } from "react-icons/pi";
import './App.css';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className='container'>
      <div className='bag-conatiner '>
            {images.map(image => (
              <div key={image.id} className='card'>
                <div className='item'>
                <img src={image.image} alt={image.title} />
                <div className='img-details'>
                <p className='item-name'>The Metro Movers Black</p>
                    <div className='price'>
                          <p>Price : 4899 <span className='span'>8999</span> <span>(50%)</span></p>
                          <PiHandbagSimpleLight className='cart-icon'/>
                    </div> 
              </div>
            </div>
            </div>
            ))}
       </div>
    
  </div>
  );
};

export default ImageList;
