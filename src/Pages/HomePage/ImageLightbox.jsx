import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons"

const ImageLightbox = ({ images, alt, onClose }) => {
    const [index, setIndex] = useState(0)
    const [touchStartX, setTouchStartX] = useState(null)
    const hasMany = images.length > 1

    const prev = () => setIndex(i => (i - 1 + images.length) % images.length)
    const next = () => setIndex(i => (i + 1) % images.length)

    // teclado (Esc fecha, setas navegam) e trava a rolagem do fundo
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose()
            if (hasMany && e.key === "ArrowLeft") prev()
            if (hasMany && e.key === "ArrowRight") next()
        }
        window.addEventListener("keydown", onKey)
        document.body.style.overflow = "hidden"
        return () => {
            window.removeEventListener("keydown", onKey)
            document.body.style.overflow = ""
        }
    }, [])

    // arrastar o dedo para o lado no celular
    const handleTouchEnd = (e) => {
        if (touchStartX === null || !hasMany) return
        const diff = e.changedTouches[0].clientX - touchStartX
        if (diff > 50) prev()
        if (diff < -50) next()
        setTouchStartX(null)
    }

    const stop = (e) => e.stopPropagation()

    return createPortal(
        <div
            onClick={onClose}
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center"
        >
            <button onClick={(e) => { stop(e); onClose() }} aria-label="Fechar"
                className="absolute top-4 right-4 text-white text-3xl hover:text-pink-400">
                <FontAwesomeIcon icon={faXmark} />
            </button>

            {hasMany && (
                <button onClick={(e) => { stop(e); prev() }} aria-label="Foto anterior"
                    className="absolute left-2 md:left-6 text-white text-3xl p-3 hover:text-pink-400">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}

            <img
                src={images[index]}
                alt={alt}
                onClick={stop}
                className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg"
            />

            {hasMany && (
                <button onClick={(e) => { stop(e); next() }} aria-label="Próxima foto"
                    className="absolute right-2 md:right-6 text-white text-3xl p-3 hover:text-pink-400">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
        </div>,
        document.body
    )
}

export default ImageLightbox