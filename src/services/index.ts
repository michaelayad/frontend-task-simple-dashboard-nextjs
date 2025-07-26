export const ApiServices = {

    baseUrl: process.env.NEXT_PUBLIC_API_URL || "",

    fetchProducts: async () => {
        try {
            const response = await fetch(`${ApiServices.baseUrl}/product`, {
                cache: "no-store",
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
}

