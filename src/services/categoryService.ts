// // // Define the interface to match your backend model
// // export interface Category {
// //   _id: string;
// //   name: string;
// //   description?: string;
// //   img: string; // The URL string for the category image
// //   createdAt?: string;
// //   updatedAt?: string;
// // }

// // const API_URL = "http://localhost:3000/api/categories";

// // /**
// //  * Fetches all categories from the backend
// //  */
// // export const getAllCategories = async (): Promise<Category[]> => {
// //   try {
// //     const response = await fetch(API_URL, {
// //       method: "GET",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     });

// //     if (!response.ok) {
// //       throw new Error(`Error: ${response.status} - Failed to fetch categories`);
// //     }

// //     return await response.json();
// //   } catch (error) {
// //     console.error("Category Service Error:", error);
// //     throw error;
// //   }
// // };

// // /**
// //  * Optional: Fetch a single category by ID
// //  */
// // export const getCategoryById = async (id: string): Promise<Category> => {
// //   const response = await fetch(`${API_URL}/${id}`);
// //   if (!response.ok) throw new Error("Failed to fetch category");
// //   return await response.json();
// // };



// // Define the interface to match your backend model
// export interface Category {
//   _id: string;
//   name: string;
//   description?: string;
//   img: string; // The relative URL path for the category image (e.g., /uploads/categories/image.jpg)
//   createdAt?: string;
//   updatedAt?: string;
// }

// // Update this to match your backend port
// const API_BASE_URL = "http://localhost:3000"; // Change 5000 to your actual backend port
// const API_URL = `${API_BASE_URL}/api/categories`;

// /**
//  * Fetches all categories from the backend
//  */
// export const getAllCategories = async (): Promise<Category[]> => {
//   try {
//     const response = await fetch(API_URL, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - Failed to fetch categories`);
//     }

//     const categories: Category[] = await response.json();
    
//     // Transform image paths to include full URL
//     return categories.map(category => ({
//       ...category,
//       img: category.img.startsWith('http') 
//         ? category.img 
//         : `${API_BASE_URL}${category.img}`
//     }));
//   } catch (error) {
//     console.error("Category Service Error:", error);
//     throw error;
//   }
// };

// /**
//  * Fetch a single category by ID
//  */
// export const getCategoryById = async (id: string): Promise<Category> => {
//   try {
//     const response = await fetch(`${API_URL}/${id}`);
    
//     if (!response.ok) {
//       throw new Error("Failed to fetch category");
//     }
    
//     const category: Category = await response.json();
    
//     // Transform image path to include full URL
//     return {
//       ...category,
//       img: category.img.startsWith('http') 
//         ? category.img 
//         : `${API_BASE_URL}${category.img}`
//     };
//   } catch (error) {
//     console.error("Get Category Error:", error);
//     throw error;
//   }
// };

// /**
//  * Create a new category with image upload
//  */
// export const createCategory = async (
//   name: string,
//   description: string,
//   imageFile: File
// ): Promise<Category> => {
//   try {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("img", imageFile);

//     const response = await fetch(API_URL, {
//       method: "POST",
//       body: formData,
//       // Don't set Content-Type header - browser will set it with boundary
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to create category");
//     }

//     const data = await response.json();
//     const category = data.category;
    
//     // Transform image path to include full URL
//     return {
//       ...category,
//       img: category.img.startsWith('http') 
//         ? category.img 
//         : `${API_BASE_URL}${category.img}`
//     };
//   } catch (error) {
//     console.error("Create Category Error:", error);
//     throw error;
//   }
// };

// /**
//  * Update an existing category
//  */
// export const updateCategory = async (
//   id: string,
//   name?: string,
//   description?: string,
//   imageFile?: File
// ): Promise<Category> => {
//   try {
//     const formData = new FormData();
//     if (name) formData.append("name", name);
//     if (description) formData.append("description", description);
//     if (imageFile) formData.append("img", imageFile);

//     const response = await fetch(`${API_URL}/${id}`, {
//       method: "PUT",
//       body: formData,
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to update category");
//     }

//     const category: Category = await response.json();
    
//     // Transform image path to include full URL
//     return {
//       ...category,
//       img: category.img.startsWith('http') 
//         ? category.img 
//         : `${API_BASE_URL}${category.img}`
//     };
//   } catch (error) {
//     console.error("Update Category Error:", error);
//     throw error;
//   }
// };

// /**
//  * Delete a category
//  */
// export const deleteCategory = async (id: string): Promise<void> => {
//   try {
//     const response = await fetch(`${API_URL}/${id}`, {
//       method: "DELETE",
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to delete category");
//     }
//   } catch (error) {
//     console.error("Delete Category Error:", error);
//     throw error;
//   }
// };


// Define the interface to match your backend model
export interface Category {
  _id: string;
  name: string;
  description?: string;
  img: string; 
  createdAt?: string;
  updatedAt?: string;
}

const API_BASE_URL = "http://localhost:3000"; 
const API_URL = `${API_BASE_URL}/api/categories`;

/**
 * Helper function to ensure image URLs are absolute and correctly formatted
 */
const formatImageUrl = (imgPath: string): string => {
  if (!imgPath) return ""; // Handle empty paths
  if (imgPath.startsWith('http')) return imgPath;
  
  // Ensure the path starts with a single forward slash
  const cleanPath = imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
  return `${API_BASE_URL}${cleanPath}`;
};

/**
 * Fetches all categories from the backend
 */
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
    
    return categories.map(category => ({
      ...category,
      img: formatImageUrl(category.img)
    }));
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
    return {
      ...category,
      img: formatImageUrl(category.img)
    };
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
    // Some backends return the object directly, others wrap it in { category: {...} }
    const category = data.category || data; 
    
    return {
      ...category,
      img: formatImageUrl(category.img)
    };
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
    
    return {
      ...category,
      img: formatImageUrl(category.img)
    };
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