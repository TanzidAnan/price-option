import React from 'react';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {
    const { name, price, features, image } = option
    return (
        <div className='bg-amber-800 rounded-2xl p-4 text-white flex flex-col '>
            <h2 className=' text-center'>
                <span className='text-6xl font-extrabold'>{price}</span>
                <span>/mon</span>
            </h2>
            {/* <img className='w-20' src={image} alt="gym" /> */}
            <h4 className='text-2xl my-4  text-center'>{name}</h4>
            <div className='flex-grow '>
                {
                    features.map((fea, idx) => <Features key={idx} fea={fea}></Features>)
                }
            </div>
            <button className='mt-12 bg-blue-800 w-full py-2 font-bold rounded-3xl'>Buy Now</button>
        </div>
    );
};

export default PriceOption;