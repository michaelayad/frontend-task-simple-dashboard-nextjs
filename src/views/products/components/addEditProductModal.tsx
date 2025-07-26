import TextArea from "@/components/core/inputs/textArea";
import TextField from "@/components/core/inputs/textField";
import ImageSelector from "@/components/images/imageSelector";
import Modal from "@/components/modal";
import { Product } from "@/types/product";
import { useState } from "react";

const AddEditProductModal = ({
  isOpen,
  setIsOpen,
  editMode = false,
  productData,
  setProductData,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editMode?: boolean;
  productData?: Product;
  setProductData?: React.Dispatch<React.SetStateAction<Product>>;
}) => {
  const [formData, setFormData] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    category: "",
    image: "",
  });
  const handleClose = () => {
    if (editMode && setProductData) {
      setProductData({} as Product);
    }
    setIsOpen(false);
    setFormData({
      name: "",
      description: "",
      price: 0,
      category: "",
      image: "",
    } as Product);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <Modal
      title={`${editMode ? "Edit Product" : "Add Product"}`}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextArea
          label="Description"
          placeholder="Enter your description here..."
          rows={4}
          className="mt-4"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <div className="grid grid-cols-2 gap-2">
          <TextField
            type="number"
            name="price"
            label="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: parseInt(e.target.value) })
            }
          />
          <TextField
            type="text"
            name="category"
            label="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
        </div>

        <ImageSelector
          initialImage={formData?.image as string}
          onImageChange={(imageData) => {
            setFormData({ ...formData, image: imageData });
          }}
        />
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-darker cursor-pointer"
        >
          {editMode ? "Edit" : "Add"}
        </button>
      </form>
    </Modal>
  );
};

export default AddEditProductModal;
