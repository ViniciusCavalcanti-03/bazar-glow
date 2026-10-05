import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const INSTAGRAM_USER = "bazarglowww"   // sem o @
const WHATSAPP_NUMBER = "5581996638103"     // 55 + DDD sem zero + número
const WHATSAPP_MESSAGE = "Olá! Vim pelo site do Bazar Glow."

const Footer = () => (
    <footer className="mt-12 border-t border-stone-200 bg-white px-4 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
            <p className="font-display text-xl text-brand-700">Bazar Glow</p>

            <div className="flex flex-wrap justify-center gap-3">
                <a
                    href={`https://instagram.com/${INSTAGRAM_USER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-brand-200 px-4 py-2 text-sm text-stone-700 transition hover:border-brand-600 hover:text-brand-700"
                >
                    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                    @{INSTAGRAM_USER}
                </a>

                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-brand-200 px-4 py-2 text-sm text-stone-700 transition hover:border-brand-600 hover:text-brand-700"
                >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                    WhatsApp
                </a>
            </div>

            <p className="text-xs text-stone-400">
                © {new Date().getFullYear()} Bazar Glow. Todos os direitos reservados.
            </p>
        </div>
    </footer>
)

export default Footer