import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import './custom.css'
import App from './App'
import SearchContextProvider from './context/SearchContext'

ReactDOM.render(
	<React.StrictMode>
		<SearchContextProvider>
			<Router>
				<App />
			</Router>
		</SearchContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
