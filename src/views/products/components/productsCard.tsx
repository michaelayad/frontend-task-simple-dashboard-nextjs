import Icon from "@/components/core/icon/icon";
import { Product } from "@/types/product";
import Image from "next/image";
import AddEditProductModal from "./addEditProductModal";
import { useState } from "react";
import DeleteProductModal from "./deleteProductModal";

const ProductsCard = ({
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
    <div className="p-4">
      <h1 className="text-2xl font-bold text-primary mb-6">Products List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.image as string}
                alt={product.name as string}
                fill
                className="object-cover"
                loading="eager"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary mb-2">
                {product.name}
              </h3>
              <p className="text-primary-darkest font-bold text-xl mb-1">
                ${product.price}
              </p>
              <p className="text-gray-500 mb-1 line-clamp-2">
                {product.description}
              </p>
              <p className="bg-primary-lightest text-primary rounded-md py-1 px-4 w-fit text-sm mb-2">
                {product.category}
              </p>
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
            </div>
          </div>
        ))}
      </div>
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

export default ProductsCard;
