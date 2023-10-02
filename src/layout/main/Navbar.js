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
        <div className='grid grid-cols-3 mb-8 w-10/12 mx-auto items-center mt-10'>
            <div className='flex items-end gap-5'>
                <img src={logo} alt="" />
                <div>
                    <h1 className='border-[1px] w-20 border-black'> </h1>
                    <img src={vector} className="w-20" alt="" />
                </div>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className='flex items-center gap-10 mx-auto'>
                <div>
                    <h1 className='flex gap-1 items-center text-md tracking-wider'> <span><BiUser className='text-xl' /></span> Account</h1>
                </div>
                <div>
                    <Link to="/shoppingCart" className='px-7 rounded-full py-3 tracking-wider flex items-center gap-1 bg-primary text-white'><span><BiShoppingBag className='text-2xl' /></span> Cart ({products?.length ? products?.length : 0})</Link>
                </div>
            </div>


        </div>
    );
};

export default Navbar;