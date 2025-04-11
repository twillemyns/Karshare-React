import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Root from './Root.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	</StrictMode>,
)
