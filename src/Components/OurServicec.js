import React from 'react';
const OurServicec = () => {
    return (
        <div className='container-fluid services'>
            <div className='row pt-4 text-center'>
                <h3>Oue Services</h3>
                <h5>Trusted,Secure, Reliable</h5>
            </div>
            <div className='row mt-5'>
                <div className='col-xl-6 col-sm-12 col-md-6 bg-white  text-center py-5 services-item'>
                    <h4>Mi Screen Protect</h4>
                    <p>Screen Protection Against Accidental, Liquid Damage <br />Avail 2 Claims Per Year</p>
                    <div>
                        <img className='img-fluid' alt='scrren protect' src='Images/screen-protect.png' />
                    </div>
                </div>
                <div className='col-xl-6 col-sm-12 col-md-6'>
                    <div className='bg-white text-center py-5 services-item'>
                        <h4>Mi Complete Protect</h4>
                        <p>Safeguard your smartphone Against Accidental & Liquid <br />Damage</p>
                        <div>
                            <img className='img-fluid' alt='Mi protect' src='Images/mi-protect.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-xl-6 col-sm-12 col-md-6 bg-white text-center py-5 services-item '>
                    <h4>Smartphone Quality </h4>
                    <p>We are committed to provide the best quality at an honest price. </p>
                    <div>
                        <img className='img-fluid' alt='Quality protect' src='Images/quality.png' />
                    </div>
                </div>
                <div className='col-xl-6 col-sm-12 col-md-6'>
                    <div className='bg-white text-center py-5 services-item '>
                        <h4>Mi Exchange</h4>
                        <p>Exchange your old Smart phone in three simple steps</p>
                        <div>
                            <img className='img-fluid' alt='Exchange protect' src='Images/exchange.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurServicec;
