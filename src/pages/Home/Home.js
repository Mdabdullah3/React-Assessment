import React from 'react';
import Navbar from '../../layout/main/Navbar';
import CategoriSection from '../../components/CategoriSection';
import Banner from '../../components/Banner';
import Shop from '../Products/Shop';
const Home = () => {
    return (
        <div>
            <Navbar />
            <CategoriSection />
            <Banner />
            <Shop />
        </div>
    );
};

export default Home;