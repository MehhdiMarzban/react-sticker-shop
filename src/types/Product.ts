import Category from "./Category";

interface Product { 
    id: string;
    title: string;
    price: string;
    category: Category;
    sticker: string;
    description: string;
    altSticker? :string;
}

export default Product;