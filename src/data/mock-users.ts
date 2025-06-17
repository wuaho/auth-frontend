import type { User } from "../types/user";

export const mockUsers: Record<string, User> = {
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

// Mock authentication function
export const authenticateUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simple mock authentication - in real app, this would be server-side
  if (password === "password123" && mockUsers[email]) {
    return mockUsers[email];
  }

  return null;
};

// Mock social authentication
export const authenticateWithSocial = async (
  provider: string
): Promise<User> => {
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
};
