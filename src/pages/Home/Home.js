import React from 'react';
import Navbar from '../../layout/main/Navbar';
import CategoriSection from '../../components/CategoriSection';
import Banner from '../../components/Banner';
const Home = () => {
    return (
        <div>
            <Navbar />
            <CategoriSection />
            <Banner />
        </div>
    );
};

export default Home;