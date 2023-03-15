export function formatMoney(value: number) {
  const data = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return data
}

export function formatPrice(value: number): string {
  return String(value.toFixed(2)).replace('.', ',')
}
