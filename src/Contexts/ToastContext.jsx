import { createContext, useCallback, useContext, useRef, useState } from "react"

const ToastContext = createContext(null)
export const useToast = () => useContext(ToastContext)

const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ message: "", type: "success", visible: false })
    const timer = useRef(null)

    const showToast = useCallback((message, type = "success", duration = 1500) => {
        clearTimeout(timer.current)
        setToast({ message, type, visible: true })
        timer.current = setTimeout(() => {
            setToast((t) => ({ ...t, visible: false }))
        }, duration)
    }, [])

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div
                role="status"
                aria-live="polite"
                className={`pointer-events-none fixed bottom-6 left-1/2 z-[70] max-w-[90vw] -translate-x-1/2 rounded-full px-5 py-3 text-center text-sm font-medium text-white shadow-lg transition-all duration-300 ${
                    toast.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${toast.type === "success" ? "bg-brand-700" : "bg-stone-800"}`}
            >
                {toast.message}
            </div>
        </ToastContext.Provider>
    )
}

export default ToastProvider