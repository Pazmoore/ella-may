import React from 'react'
import ProductCard from './ProductCard'

const NewProducts = () => {

    const productData = [
        {
            img:'/8.jpg',
            title: 'Jacket',
            desc: 'Fur Jacket',
            rating: 4,
            price:'55.00',
        },
        {
            img:'/6.jpg',
            title: 'Watches',
            desc: 'Digital Watch',
            rating: 3,
            price:'25.00',
        },
        {
            img:'/13.jpg',
            title: 'Sunglasses',
            desc: 'Nude Sunglasses',
            rating: 4,
            price:'35.00',
        },
        {
            img:'/3.jpg',
            title: 'Shoes',
            desc: 'Stiletoes',
            rating: 4,
            price:'25.00',
        },
        {
            img:'/9.jpg',
            title: 'Clothes',
            desc: 'Maxi Gown',
            rating: 4,
            price:'25.00',
        },
        {
            img:'/1.jpg',
            title: 'Skirts',
            desc: 'Multi-Colored',
            rating: 4,
            price:'45.00',
        },
        {
            img:'/7.jpg',
            title: 'Shoes',
            desc: 'Sneakers',
            rating: 4,
            price:'25.00',
        },
        {
            img:'/5.1.jpg',
            title: 'Jacket',
            desc: 'Leather Jacket',
            rating: 5,
            price:'50.00',
        },
        {
            img:'/4.jpg',
            title: 'Sunglasses',
            desc: 'White Framed',
            rating: 4,
            price:'35.00',
        },
        {
            img:'/12.jpg',
            title: 'Watches',
            desc: 'Smart Watch',
            rating: 3,
            price:'25.00',
        },
        {
            img:'/8.jpg',
            title: 'Jacket',
            desc: 'Leather Jacket',
            rating: 4,
            price:'55.00',
        },
        {
            img:'/11.jpg',
            title: 'Sneakers',
            desc: 'Multi-colored',
            rating: 4,
            price:'25.00',
        },
      
    ]

  return (
    <div>
        <div className="container pt-16">
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {productData.map((item, index) =>(
                    <ProductCard
                        key ={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProducts