"use client";
import Icon from "@/components/core/icon/icon";
import { Product } from "@/types/product";
import clsx from "clsx";
import { useState } from "react";
import ProductsList from "./components/productsList";
import ProductsCard from "./components/productsCard";
import AddEditProductModal from "./components/addEditProductModal";

const Products = ({ products }: { products: Product[] }) => {
  const [isList, setIsList] = useState(true);
  const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
  const [productsList,setProductsList]=useState<Product[]>(products)

  const handleToggle = (value: boolean) => {
    setIsList(value);
  };

  return (
    <div className="h-full w-full p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-primary ">Products</h1>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row border rounded-md overflow-hidden">
            <button
              className={clsx(
                "py-2 px-4 flex items-center gap-2 justify-center transition-colors duration-200",
                {
                  "bg-primary text-white": isList,
                  "bg-primary-lightest text-primary hover:bg-primary-lighter border-r":
                    !isList,
                }
              )}
              onClick={() => handleToggle(true)}
              aria-label="Switch to list view"
            >
              <Icon name="list" />
            </button>
            <button
              className={clsx(
                "py-2 px-4 flex items-center gap-2 justify-center transition-colors duration-200",
                {
                  "bg-primary text-white": !isList,
                  "bg-primary-lightest text-primary hover:bg-primary-lighter":
                    isList,
                }
              )}
              onClick={() => handleToggle(false)}
              aria-label="Switch to grid view"
            >
              <Icon name="grid" />
            </button>
          </div>
          <button
            className="bg-primary text-white rounded-md py-2 px-4 flex items-center gap-2 justify-center hover:bg-primary-darker transition-colors duration-200 cursor-pointer"
            onClick={() => {
              setIsAddedModalOpen(true);
            }}
          >
            <Icon name="plus" />
            Add Product
          </button>
        </div>
      </div>

      {products?.length > 0 ? (
        isList ? (
          <ProductsList products={productsList} setProducts={setProductsList} />
        ) : (
          <ProductsCard products={productsList} setProducts={setProductsList} />
        )
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
      <AddEditProductModal isOpen={isAddedModalOpen} setIsOpen={setIsAddedModalOpen} productsList={productsList} setProductsList={setProductsList}/>
    </div>
  );
};

export default Products;
