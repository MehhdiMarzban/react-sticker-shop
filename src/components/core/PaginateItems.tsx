import { useState } from "react";
import ReactPaginate from "react-paginate";

import { PaginateItemsProps } from "../../types";

const PaginateItems: React.FC<PaginateItemsProps> = ({
    itemsPerPage = 1,
    items = [],
    ItemsList,
}) => {
    const [itemOffset, setItemOffset] = useState<number>(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (e: any) => {
        const newOffset = e.selected * itemsPerPage;
        setItemOffset(newOffset);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <>
            <ItemsList items={currentItems} />
            <ReactPaginate
                onPageChange={handlePageChange}
                pageCount={pageCount}
                containerClassName="flex justify-center items-center mt-8 mb-4"
                pageClassName="block bg-primary border-solid border-grey-200 w-10 h-10 flex justify-center items-center rounded-md mx-1 text-white transition-all ease-linear hover:bg-primary-content"
                pageLinkClassName="block w-10 h-10 flex justify-center items-center rounded-md mx-1 text-white"
                activeClassName="bg-teal-500 hover:bg-teal-700"
                pageRangeDisplayed={5}
                breakLabel="..."
                renderOnZeroPageCount={null}
                nextLabel="بعدی"
                previousLabel="قبلی"
                nextClassName="mx-2 bg-primary-content h-10 w-10 rounded-md text-white flex justify-center items-center hover:bg-primary transition-all ease-linear"
                previousClassName="mx-2 bg-primary-content h-10 w-10 rounded-md text-white flex justify-center items-center hover:bg-primary transition-all ease-linear"
            />
        </>
    );
};

export default PaginateItems;

//* useage: this component need a component for listing items
