import HomeScreen from './screens/HomeScreen'
import { Switch, Route } from 'react-router-dom'
import Character from './screens/Character'

function App() {
	return (
		<div className="">
			<Switch>
				<Route path="/:id" component={Character}></Route>
				<Route path="/" component={HomeScreen} exact></Route>
			</Switch>
		</div>
	)
}

export default App
