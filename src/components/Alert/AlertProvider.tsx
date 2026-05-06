'use client';
import React from "react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertState {
  open: boolean;
  type: AlertType;
  message: string;
  duration: number;
}

interface AlertContextValue {
  showAlert: (options: { type?: AlertType; message: string; duration?: number }) => void;
}

const AlertContext = React.createContext<AlertContextValue | undefined>(undefined);

const DEFAULT_ALERT: AlertState = {
  open: false,
  type: "info",
  message: "",
  duration: 3000,
};

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlert] = React.useState<AlertState>(DEFAULT_ALERT);
  const timerRef = React.useRef<number | null>(null);

  const showAlert = React.useCallback(
    ({ type = "info", message, duration = 3000 }: { type?: AlertType; message: string; duration?: number }) => {
      setAlert({ open: true, type, message, duration });
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setAlert((a) => ({ ...a, open: false }));
      }, duration);
    },
    []
  );

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <ZestAlertGlobal {...alert} />
    </AlertContext.Provider>
  );
};

export function useAlert() {
  const ctx = React.useContext(AlertContext);
  if (!ctx) throw new Error("useAlert must be used within an AlertProvider");
  return ctx;
}

const typeStyles: Record<AlertType, string> = {
  success:
    "bg-green-100 text-green-800 border-green-400 dark:bg-green-900/40 dark:text-green-300 dark:border-green-700",
  error:
    "bg-red-100 text-red-800 border-red-400 dark:bg-red-900/40 dark:text-red-300 dark:border-red-700",
  warning:
    "bg-yellow-100 text-yellow-800 border-yellow-400 dark:bg-yellow-900/40 dark:text-yellow-300 dark:border-yellow-600",
  info:
    "bg-blue-100 text-blue-800 border-blue-400 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-700",
};

const ZestAlertGlobal: React.FC<AlertState> = ({ open, type, message }) => {
  if (!open || !message) return null;

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[9999] max-w-md w-fit px-4 py-2.5 rounded-lg border-2 shadow-lg text-sm font-medium transition-all duration-300 ${typeStyles[type]}`}
    >
      {message}
    </div>
  );
};
