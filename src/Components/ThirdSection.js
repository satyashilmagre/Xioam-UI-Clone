import React from 'react';
const ThirdSection = () => {
    return (
        <div className='third-section'>
            <div className='text-center mt-5'>
                <h2>Redmi Series</h2>
                <p>The Performance Racer</p>
                <button className='px-3 py-1 text-white bg-black rounded'>All Redmi Phones</button>
            </div>
            <div className='container-fluid mt-5 third-banner-one '>
                <div className='container text-start text-white fw-bold third-text '>
                    <h2 className=' text-white'>Redmi A3</h2>
                    <h5 className='fw-normal'>Starting at ₹.6,999*</h5>
                    <button className='btn bg-white text-black rounded mt-2'>Buy Now</button>
                </div>
            </div>
            <div className='container-fluid third-banner-two  '>
                <div className='container text-start text-white fw-bold third-text '>
                    <h2 className=' text-black'>Redmi Note 13 pro+ 5G</h2>
                    <h5 className='fw-normal'>Special Launch Price ₹.29,999*</h5>
                    <button className='btn bg-black text-white rounded mt-2'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}
export default ThirdSection;
