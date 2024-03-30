import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import OfferSection from './OfferSection';
import ThirdSection from './ThirdSection';
import Offermobilesection from './Offermobilesection';
import OurServicec from './OurServicec';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <OfferSection/>
            <ThirdSection/>
           <Offermobilesection/>
           <OurServicec/>
           <Footer/>
        </div>
    );
}

export default Home;
