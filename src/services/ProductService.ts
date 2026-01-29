export interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  categoryId: string | {
    _id: string;
    name: string;
    description?: string;
    img: string;
  };
  quantity: number;
  inStock: boolean;
  img: string; // Cloudinary URL
  createdAt?: string;
  updatedAt?: string;
}

const API_BASE_URL = "http://localhost:3000";
const API_URL = `${API_BASE_URL}/api/product`;

/**
 * Fetches all products from the backend
 */
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - Failed to fetch products`);
    }

    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error("Product Service Error:", error);
    throw error;
  }
};

/**
 * Fetch a single product by ID
 */
export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    
    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error("Get Product Error:", error);
    throw error;
  }
};

/**
 * Get products by category ID
 */
export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  try {
    const allProducts = await getAllProducts();
    
    // Filter products by categoryId
    const filteredProducts = allProducts.filter(product => {
      if (typeof product.categoryId === 'string') {
        return product.categoryId === categoryId;
      } else if (product.categoryId && typeof product.categoryId === 'object') {
        return product.categoryId._id === categoryId;
      }
      return false;
    });
    
    return filteredProducts;
  } catch (error) {
    console.error("Get Products By Category Error:", error);
    throw error;
  }
};

/**
 * Create a new product with image upload
 */
export const createProduct = async (
  name: string,
  price: number,
  description: string,
  categoryId: string,
  quantity: number,
  imageFile?: File
): Promise<Product> => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("description", description);
    formData.append("categoryId", categoryId);
    formData.append("quantity", quantity.toString());
    
    if (imageFile) {
      formData.append("img", imageFile);
    }

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create product");
    }

    const data = await response.json();
    const product = data.product || data;
    
    return product;
  } catch (error) {
    console.error("Create Product Error:", error);
    throw error;
  }
};

/**
 * Update an existing product
 */
export const updateProduct = async (
  id: string,
  name?: string,
  price?: number,
  description?: string,
  categoryId?: string,
  quantity?: number,
  imageFile?: File
): Promise<Product> => {
  try {
    const formData = new FormData();
    
    if (name) formData.append("name", name);
    if (price !== undefined) formData.append("price", price.toString());
    if (description) formData.append("description", description);
    if (categoryId) formData.append("categoryId", categoryId);
    if (quantity !== undefined) formData.append("quantity", quantity.toString());
    if (imageFile) formData.append("img", imageFile);

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update product");
    }

    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error("Update Product Error:", error);
    throw error;
  }
};

/**
 * Delete a product
 */
export const deleteProduct = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete product");
    }
  } catch (error) {
    console.error("Delete Product Error:", error);
    throw error;
  }
};