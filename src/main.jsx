import { Elements } from '@stripe/react-stripe-js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import stripePromise from './config/stripeConfig'
import GlobalStyles from './styles/globalStyles'
import { standardTheme } from './styles/themes/standard'
import AppProvider from './hooks'
import { Router } from './routes'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={standardTheme}>
			<AppProvider>
				<Elements stripe={stripePromise}>
					<BrowserRouter >
						<Router />
					</BrowserRouter>					
				</Elements>
				<GlobalStyles />
				<ToastContainer theme="dark" autoClose={2000} />
			</AppProvider>
		</ThemeProvider>
	</StrictMode>
)
