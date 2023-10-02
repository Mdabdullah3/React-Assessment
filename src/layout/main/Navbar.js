import React from 'react';
import logo from "../../assets/logo/logo.png"
import vector from "../../assets/logo/Group.svg"
import SearchBar from '../../components/ui/SearchBar';
import { BiUser, BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {

    const { products } = useSelector(state => state.addCart)

    return (
        <div className='grid md:grid-cols-3 grid-cols-1 mb-8 md:w-10/12 w-11/12 mx-auto items-center mt-10'>
            <div className='flex items-end md:gap-5 gap-1'>
                <img src={logo} alt="" className='mx-auto md:mx-0' />
                <div className='md:block hidden'>
                    <h1 className='border-[1px] w-20 border-black'> </h1>
                    <img src={vector} className="w-20" alt="" />
                </div>
            </div>
            <div className='my-2 md:my-0'>
                <SearchBar />
            </div>
            <div className='flex items-center gap-10 mx-auto'>
                <div className=''>
                    <h1 className='flex gap-1 items-center text-md tracking-wider'> <span><BiUser className='text-xl' /></span> Account</h1>
                </div>
                <div>
                    <Link to="/shoppingCart" className='md:px-7 px-5 rounded-full py-3 tracking-wider flex items-center gap-1 bg-primary text-white'><span><BiShoppingBag className='md:text-2xl text-xl' /></span> Cart ({products?.length ? products?.length : 0})</Link>
                </div>
            </div>


        </div>
    );
};

export default Navbar;