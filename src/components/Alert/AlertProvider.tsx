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

const ZestAlertGlobal: React.FC<AlertState> = ({ open, type, message, duration }) => {
  if (!open || !message) return null;
  const typeStyles: Record<string, string> = {
    success: "bg-green-100 text-green-700 border-green-400",
    error: "bg-red-100 text-red-700 border-red-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
  };
  return (
    <div
      role="alert"
      aria-live="assertive"
      tabIndex={0}
      className={`fixed top-24 left-1/2 -translate-x-1/2 z-[9999] max-w-md w-fit px-4 py-2 rounded-lg border-2 shadow-lg transition-all duration-300 ${typeStyles[type]}`}
      style={{ pointerEvents: 'auto' }}
    >
      {message}
    </div>
  );
};



// Usage:
// import { useAlert } from "../components/Alert/AlertProivder";

// function MyComponent() {
//   const { showAlert } = useAlert();

//   async function handleSave() {
//     // ...kuch logic...
//     showAlert({ type: "success", message: "Data saved!", duration: 3000 });
//   }

//   return <button onClick={handleSave}>Save</button>;
// }