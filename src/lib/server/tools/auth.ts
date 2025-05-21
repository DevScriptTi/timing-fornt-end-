import "server-only";
import { cookies } from "next/headers";
import { decrypt } from "./session";

export interface User {
  id: string;
  email: string;
  role: "user" | "admin";
  // Add other user properties as needed
}

export async function isAuth(): Promise<boolean> {
  try {
    const cookie = (await cookies()).get("session")?.value;
    if (!cookie) return false;

    const session = await decrypt(cookie);
    if (!session) return false;

    // Check if session is expired
    if (new Date(session.expiresAt as string) < new Date()) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Auth check failed:", error);
    return false;
  }
}

export async function isAdmin(): Promise<boolean> {
  try {
    const cookie = (await cookies()).get("user")?.value;
    if (!cookie) return false;

    const user: User = JSON.parse(cookie);
    return user.role === "admin";
  } catch (error) {
    console.error("Admin check failed:", error);
    return false;
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookie = (await cookies()).get("user")?.value;
    if (!cookie) return null;

    return JSON.parse(cookie) as User;
  } catch (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
} 