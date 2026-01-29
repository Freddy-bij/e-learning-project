export interface Category {
  _id: string;
  name: string;
  description?: string;
  img: string; // Now this will be a full Cloudinary URL
  createdAt?: string;
  updatedAt?: string;
}

const API_BASE_URL = "http://localhost:3000"; 
const API_URL = `${API_BASE_URL}/api/categories`;



export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - Failed to fetch categories`);
    }

    const categories: Category[] = await response.json();
    
    // Cloudinary URLs are already complete, no need to format
    return categories;
  } catch (error) {
    console.error("Category Service Error:", error);
    throw error;
  }
};

/**
 * Fetch a single category by ID
 */
export const getCategoryById = async (id: string): Promise<Category> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch category");
    
    const category: Category = await response.json();
    return category;
  } catch (error) {
    console.error("Get Category Error:", error);
    throw error;
  }
};

/**
 * Create a new category with image upload
 */
export const createCategory = async (
  name: string,
  description: string,
  imageFile: File
): Promise<Category> => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("img", imageFile);

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create category");
    }

    const data = await response.json();
    const category = data.category || data; 
    
    return category;
  } catch (error) {
    console.error("Create Category Error:", error);
    throw error;
  }
};

/**
 * Update an existing category
 */
export const updateCategory = async (
  id: string,
  name?: string,
  description?: string,
  imageFile?: File
): Promise<Category> => {
  try {
    const formData = new FormData();
    if (name) formData.append("name", name);
    if (description) formData.append("description", description);
    if (imageFile) formData.append("img", imageFile);

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update category");
    }

    const data = await response.json();
    const category = data.category || data;
    
    return category;
  } catch (error) {
    console.error("Update Category Error:", error);
    throw error;
  }
};

/**
 * Delete a category
 */
export const deleteCategory = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete category");
    }
  } catch (error) {
    console.error("Delete Category Error:", error);
    throw error;
  }
};