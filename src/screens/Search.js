import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance as axios } from '../axios'
import { SearchContext } from '../context/SearchContext'
import Card from '../components/Card'

const Search = () => {
	const { input } = useContext(SearchContext)
	const [searchChars, setSearchChars] = useState([])
	const [loading, setLoading] = useState(true)

	const search = useCallback(async () => {
		setLoading(true)
		try {
			const { data } = await axios.get(`/character/?name=${input}`)
			setSearchChars([...data.results])
		} catch (error) {}
		setLoading(false)
	}, [input])

	useEffect(() => {
		search()
	}, [input, search])

	const content = loading ? (
		<h1>Loading</h1>
	) : (
		<>
			<Link to="/">
				<span className="rounded font-semibold border-2 border-gray-600 text-gray-600 py-1 px-2 ml-3 hover:bg-gray-600 hover:text-white">
					Home
				</span>
			</Link>
			<div className="grid gap-3 grid-cols-3 mt-6 md:grid-cols-5 mx-4 md:mx-6">
				{searchChars.map((char) => (
					<Card key={char.id} char={char}></Card>
				))}
			</div>
		</>
	)
	return content
}

export default Search
