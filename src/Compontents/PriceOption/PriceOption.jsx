import React from 'react';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {name,price,features} =option
    return (
        <div className='bg-amber-800 rounded-2xl p-4 text-white text-center'>
            <h2>
                <span className='text-4xl font-extrabold'>{price}</span>
                <span>/mon</span>
            </h2>
            <h4 className='text-2xl my-4'>{name}</h4>
            {
                features.map(fea => <Features fea={fea}></Features>)
            }
        </div>
    );
};

export default PriceOption;