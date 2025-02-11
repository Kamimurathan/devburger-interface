export function formatPrice(value) {
	return new Intl.NumberFormat('pt-br', {
		currency: 'BRL',
		style: 'currency'
	}).format(value / 100)
}
