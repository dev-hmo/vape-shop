"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

// ===== Types =====
interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info" = "success") => {
      const id = Date.now().toString(36);
      setToasts((prev) => [...prev, { id, message, type }]);

      // Auto-remove after 3s
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto animate-slide-down px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-3 min-w-[280px] border ${
              toast.type === "success"
                ? "bg-emerald-900/90 border-emerald-500/30 text-emerald-100"
                : toast.type === "error"
                ? "bg-red-900/90 border-red-500/30 text-red-100"
                : "bg-[#1a1a2e]/90 border-purple-500/30 text-purple-100"
            } backdrop-blur-xl`}
          >
            <span className="text-base">
              {toast.type === "success"
                ? "✓"
                : toast.type === "error"
                ? "✕"
                : "ℹ"}
            </span>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
