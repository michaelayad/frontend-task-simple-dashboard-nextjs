// app/dashboard/page.js
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
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch("https://62fb62afe4bcaf5351837ac1.mockapi.io/product", {
    cache: "no-store", 
  });

  if (!res.ok) {
    return <div>
      <h1>Failed to fetch Products data</h1>
    </div>
  }

  const data = await res.json();

  return (
    <Products products={data} />
  );
}

export default function Page() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <ProductsPage />
    </Suspense>
  );
}