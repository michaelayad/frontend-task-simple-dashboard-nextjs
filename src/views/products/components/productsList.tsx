"use client";
import { Product } from "@/types/product";
import Image from "next/image"; // Import Next.js Image component
import { useState } from "react";

const ProductsList = ({ products }: { products: Product[] }) => {

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
                    src={product.image}
                    alt={product.name}
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
                  <button className="text-primary hover:text-primary-darker">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
