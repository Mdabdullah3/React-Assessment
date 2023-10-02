import { BsSearch } from 'react-icons/bs';
import { setSearchFilter } from '../../redux/features/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {

    const dispatch = useDispatch();
    const searchFilter = useSelector((state) => state.search);
    const handleSearchChange = (event) => {
        const value = event.target.value;
        dispatch(setSearchFilter(value));
    };
    return (
        <div>
            <div className="relative overflow-hidden w-full p-0 mx-auto border-[1px] border-primary rounded-full">
                <input
                    type="text"
                    className="placeholder-secondary border-none px-6 pl-10 text-sm font-mono input py-4 w-full rounded-full text-secondary"
                    placeholder="Search by Products ..."
                    value={searchFilter}
                    onChange={handleSearchChange}
                />
                <h1 className=' absolute top-1/3 left-4 text-primary'><BsSearch /></h1>
            </div>
        </div>
    );
};

export default SearchBar;