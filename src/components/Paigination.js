import React from "react";
const Pagination = ({ totalItem, postsPerPage, setCurrentPage, currentPage, }) => {

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalItem / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className='pagination flex flex-wrap justify-center items-center my-14'>
            {pages?.map((page, index) =>
                <div className="w-10 h-10 text-xl mt-4 mx-2"> <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? "bg-primary px-4 text-white border-primary border text-xl py-1 rounded-sm" : "px-4 text-primary py-1 border border-primary rounded-sm"}>
                    {page}
                </button></div>

            )}
        </div>
    );
};

export default Pagination;
