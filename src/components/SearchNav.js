import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const SearchNav = ({ history }) => {
	const { input, setInput } = useContext(SearchContext)

	const searchHandler = () => {
		history.push('/search')
	}
	return (
		<div className="fixed top-0 w-full bg-gray-600 py-2 px-4 flex justify-between ">
			<h1 className="text-white uppercase text-xl font-mono font-medium">
				Rick-n-Morty
			</h1>
			<div className="flex border-yellow-500 gap-2">
				<input
					type="text"
					className="border-2 border-gray-700 flex-grow px-1 rounded"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Search Character Name"
				/>
				<button
					className="rounded text-white border-2 border-white px-1 hover:cursor-pointer hover:bg-white hover:text-gray-600"
					onClick={searchHandler}
				>
					Search
				</button>
			</div>
		</div>
	)
}

export default SearchNav
