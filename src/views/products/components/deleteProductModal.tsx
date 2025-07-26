
import Modal from "@/components/modal";
import { Product } from "@/types/product";

const DeleteProductModal = ({
  isOpen,
  setIsOpen,
  productData,
  setProductData,
  productsList,
  setProductsList,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productData?: Product;
  setProductData?: React.Dispatch<React.SetStateAction<Product>>;
  productsList?: Product[];
  setProductsList?: React.Dispatch<React.SetStateAction<Product[]>>;
}) => {
  const handleClose = () => {
    if (setProductData) {
      setProductData({} as Product);
    }
    setIsOpen(false);
  };

  const handleDelete = () => {
    
    if (setProductsList) {
      setProductsList(
        productsList?.filter((product) => product.id !== productData?.id) as Product[]
      );
    }
    handleClose();
  }
  return (
    <Modal
      title={`Delete ${productData?.name}`}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <div className="flex flex-col gap-2">
        <p className="text-gray-600">
          Are you sure you want to delete <b>{productData?.name}</b>
        </p>

        <button className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 cursor-pointer" 
        onClick={handleDelete}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteProductModal;
