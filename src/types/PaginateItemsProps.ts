interface PaginateItemsProps {
    items: object[];
    itemsPerPage: number;
    ItemsList: React.FC<{items : object[]}>;
}

export default PaginateItemsProps;
