import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
	'pk_test_51QKOBcDRzuLh41BvG58kmg9iGerHGTDiL1yT29UX3LPye4lzZba2IDxMhroiuGaKZW9Og5VqiHfgdbXsewuz1dKY00j4154R4t'
)

export default stripePromise
