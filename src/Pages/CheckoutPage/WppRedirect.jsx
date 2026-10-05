const WHATSAPP_NUMBER = "55081996638103" // 55 + DDD + número, sem +, espaços ou traços

export const buildWhatsappLink = (customer, products) => {
  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0)

  const itemsText = products
    .map(p => `➡️ ${p.name}${p.quantity > 1 ? ` (x${p.quantity})` : ""} - R$${p.price * p.quantity}`)
    .join("\n")

 const message =
`${customer.name} ${customer.surname} (${customer.phone})
CEP: ${customer.postalCode}
Rua/Avenida: ${customer.road}
Número: ${customer.number}
${customer.complement ? `Ap: ${customer.complement}\n` : ""}
Bairro: ${customer.neighborhood}
Cidade: ${customer.city}
Estado: ${customer.state}

*CARRINHO* 🛒

${itemsText}

*VALOR TOTAL: R$${total}*`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}