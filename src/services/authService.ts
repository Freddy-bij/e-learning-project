const API_URL = "http://localhost:3000/api/users";
interface RegisterUserDTO {
  name: string;
  email: string;
  password: string;
}
export interface LoginUserDTO {
  email: string;
  password: string;
}

export const loginUser = async (credentials:LoginUserDTO) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(credentials)
    })
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "login failed")
        return data;
}

export const registerUser = async (userData: RegisterUserDTO) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
      headers: {
  "Content-Type": "application/json"
},
        body: JSON.stringify(userData)
    })
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Registration failed")
        return data;
}