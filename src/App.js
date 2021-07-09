import HomeScreen from './screens/HomeScreen'
import { Switch, Route } from 'react-router-dom'
import Character from './screens/Character'
import SearchNav from './components/SearchNav'
import Search from './screens/Search'

function App() {
	return (
		<div>
			<Route
				render={({ history }) => <SearchNav history={history}></SearchNav>}
			></Route>
			<div className="mt-20">
				<Switch>
					<Route path="/search" exact component={Search}></Route>
					<Route path="/:id" component={Character}></Route>
					<Route path="/" component={HomeScreen} exact></Route>
				</Switch>
			</div>
		</div>
	)
}

export default App
