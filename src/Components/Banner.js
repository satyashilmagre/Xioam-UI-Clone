import React from 'react';
const Banner = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className='text-center'>
                    <h2>Xiomi Series</h2>
                    <p> Be A Class Apart</p>
                    <button className='px-3 py-1 bg-black text-white rounded'>All Xiomi Phones</button>
                </div>
            </div>
            <div>
                <div className='d-flex justify-content-between align-items-center mt-4  banner'>
                    <div className='container text-white' >
                        <h4 className='h4'>The Pinnacle of SmartPhone Imagery </h4>
                        <h5 className='h5'>Reserve Now at Ru.9,999</h5>
                        <button className='fw-normal fs-5 py-1 btn bg-white text-black rounded'>Reserve Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;
