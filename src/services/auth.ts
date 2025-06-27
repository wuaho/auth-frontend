import type { User } from "@/types/user";

const mockUsers: Record<string, User> = {
  "john@example.com": {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    profileImage: "/placeholder.svg?height=200&width=200",
    createdAt: "2023-01-15T10:30:00Z",
  },
  "jane@example.com": {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    profileImage: "/placeholder.svg?height=200&width=200",
    createdAt: "2023-03-22T14:45:00Z",
  },
  "demo@example.com": {
    id: "3",
    firstName: "Demo",
    lastName: "User",
    email: "demo@example.com",
    profileImage: "/placeholder.svg?height=200&width=200",
    createdAt: "2024-01-01T00:00:00Z",
  },
};

export async function authenticateUser(
  email: string,
  password: string
): Promise<User | null> {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log(response);

    const data = await response.json();

    if (response.ok) {
      // aqui deberia de guardar el token y redirigir al usuario
      localStorage.setItem("access_token", data.access_token);
    } else {
      alert(data.message || "Error doing the login");
    }
  } catch (error) {
    alert("Server or network error");
  }
}

// Mock social authentication
export async function authenticateWithSocial(provider: string): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Return a mock user for social auth
  return {
    id: Math.random().toString(36).substr(2, 9),
    firstName: "Social",
    lastName: "User",
    email: `user@${provider.toLowerCase()}.com`,
    profileImage: "/placeholder.svg?height=200&width=200",
    createdAt: new Date().toISOString(),
  };
}
