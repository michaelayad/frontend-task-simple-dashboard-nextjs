"use client";
import Icon from "@/components/core/icon/icon";
import { Product } from "@/types/product";
import Image from "next/image";
import AddEditProductModal from "./addEditProductModal";
import { useState } from "react";
import DeleteProductModal from "./deleteProductModal";

const ProductsList = ({
  products,
  setProducts,
}: {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) => {
  const [isEditedModalOpen, setIsEditedModalOpen] = useState(false);
  const [productData, setProductData] = useState<Product>({} as Product);
  const [isDeletedModalOpen, setIsDeletedModalOpen] = useState(false);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left font-semibold">Name</th>
            <th className="p-3 text-left font-semibold">Price</th>
            <th className="p-3 text-left font-semibold">Description</th>
            <th className="p-3 text-left font-semibold">Category</th>
            <th className="p-3 text-left font-semibold">Image</th>
            <th className="p-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="p-3">{product.name}</td>
              <td className="p-3">${product.price}</td>
              <td className="p-3">{product.description}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">
                {product.image ? (
                  <Image
                    src={product.image as string}
                    alt={product.name as string}
                    width={100}
                    height={100}
                    className="max-w-[100px] max-h-[100px] object-cover rounded"
                    loading="eager"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td className="p-3">
                <div className="flex gap-2">
                  <button
                    className="text-primary hover:text-primary-darker cursor-pointer"
                    onClick={() => {
                      setIsEditedModalOpen(true);
                      setProductData(product);
                    }}
                  >
                    <Icon name="edit" />
                  </button>
                  <button
                    className="text-red-700 hover:text-red-900 cursor-pointer"
                    onClick={() => {
                      setIsDeletedModalOpen(true);
                      setProductData(product);
                    }}
                  >
                    <Icon name="delete" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddEditProductModal
        isOpen={isEditedModalOpen}
        setIsOpen={setIsEditedModalOpen}
        editMode
        productData={productData}
        setProductData={setProductData}
        productsList={products}
        setProductsList={setProducts}
      />
      <DeleteProductModal
        isOpen={isDeletedModalOpen}
        setIsOpen={setIsDeletedModalOpen}
        productData={productData}
        setProductData={setProductData}
        productsList={products}
        setProductsList={setProducts}
      />
    </div>
  );
};

export default ProductsList;
