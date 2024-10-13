import React, { useContext, useState, useEffect } from 'react' // Import useState and useEffect
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import BestSeller from './BestSeller';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]); // Correct useState

    useEffect(() => {
        if (products) {
            setLatestProducts(products.slice(0, 10)); // Ensure products are available before slicing
        }
    }, [products]); // Add products as a dependency in useEffect

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque sunt quasi distinctio hic.
            </p>
        </div>
        {/* Display products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item, index) => {
                    return ( // Added return statement
                        <ProductItem 
                            key={index} 
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price}
                        />
                    );
                })
            }
        </div>
    </div>
  )
}

export default LatestCollection
