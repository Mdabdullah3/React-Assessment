import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
    return (
        <div>
            <div className="relative overflow-hidden w-full p-0 mx-auto border-[1px] border-primary rounded-full">
                <input
                    type="text"
                    className="placeholder-secondary border-none px-6 pl-10 text-sm font-mono input py-4 w-full rounded-full text-secondary"
                    placeholder="Search by Products ..."
                // value={searchFilter}
                // onChange={searchEvent.bind(this)}
                />
                <h1 className=' absolute top-1/3 left-4 text-primary'><BsSearch /></h1>
            </div>
        </div>
    );
};

export default SearchBar;