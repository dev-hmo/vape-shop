"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// ===== Types =====
export interface User {
  id: string;
  name: string;
  email: string;
  memberPoints: number;
  memberSince: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

// ===== Context =====
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "vapepi_auth";
const USERS_KEY = "vapepi_users";

// Simple hash for demo purposes (NOT production-grade)
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

interface StoredUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  memberPoints: number;
  memberSince: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Hydrate session on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as User;
        setUser(parsed);
      }
    } catch {
      // Invalid data
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Persist session
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const getStoredUsers = (): StoredUser[] => {
    try {
      const data = localStorage.getItem(USERS_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const saveStoredUsers = (users: StoredUser[]) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  const login = useCallback(
    async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
      // Simulate network delay
      await new Promise((r) => setTimeout(r, 500));

      const users = getStoredUsers();
      const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

      if (!found) {
        return { success: false, error: "No account found with this email." };
      }

      if (found.passwordHash !== simpleHash(password)) {
        return { success: false, error: "Incorrect password." };
      }

      const sessionUser: User = {
        id: found.id,
        name: found.name,
        email: found.email,
        memberPoints: found.memberPoints,
        memberSince: found.memberSince,
      };

      setUser(sessionUser);
      return { success: true };
    },
    []
  );

  const register = useCallback(
    async (
      name: string,
      email: string,
      password: string
    ): Promise<{ success: boolean; error?: string }> => {
      // Simulate network delay
      await new Promise((r) => setTimeout(r, 500));

      const users = getStoredUsers();
      const exists = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

      if (exists) {
        return { success: false, error: "An account with this email already exists." };
      }

      if (password.length < 6) {
        return { success: false, error: "Password must be at least 6 characters." };
      }

      const newUser: StoredUser = {
        id: Date.now().toString(36),
        name,
        email,
        passwordHash: simpleHash(password),
        memberPoints: 100, // Welcome bonus
        memberSince: new Date().toISOString(),
      };

      saveStoredUsers([...users, newUser]);

      const sessionUser: User = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        memberPoints: newUser.memberPoints,
        memberSince: newUser.memberSince,
      };

      setUser(sessionUser);
      return { success: true };
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
