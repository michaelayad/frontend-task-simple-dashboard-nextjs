import { ApiServices } from "@/services";
import Products from "@/views/products";
import { Suspense } from "react";

function DashboardLoading() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Loading Products data...</p>
      </div>
    </div>
  );
}

async function ProductsPage() {

  try {
    const data = await ApiServices.fetchProducts();

    return <Products products={data} />;
  } catch (error) {
    console.error("Fetch error:", error);
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Error</h1>
        <p className="text-gray-600">
          Failed to load products. Please try again later or check your network.
        </p>
      </div>
    );
  }
}

export const dynamic = "force-dynamic";
export default function Page() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <ProductsPage />
    </Suspense>
  );
}
