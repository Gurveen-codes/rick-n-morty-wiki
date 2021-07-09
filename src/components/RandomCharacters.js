import React, { useCallback, useEffect, useState } from 'react'
import { axiosInstance as axios } from '../axios'
import Card from './Card'

const RandomCharacters = ({ number }) => {
	const [loading, setLoading] = useState(true)

	const [chars, setChars] = useState([])

	const getRandomId = () => {
		const randomId = Math.floor(Math.random() * 671) + 1
		return randomId
	}

	const getCharacter = useCallback(async () => {
		setLoading(true)
		const randomChars = []
		for (let i = 0; i < number; i++) {
			const id = getRandomId()
			const { data } = await axios.get(`/character/${id}`)
			randomChars.push(data)
		}
		setChars([...randomChars])
		setLoading(false)
	}, [number])

	useEffect(() => {
		getCharacter()
	}, [getCharacter])

	const content = loading ? (
		<h1>Loading</h1>
	) : (
		<div>
			<h2 className="text-xl uppercase mb-4 font-bold">
				Explore more characters
			</h2>
			<div className="grid grid-cols-2 gap-3 md:grid-cols-5">
				{chars.map((char) => (
					<Card key={char.id} char={char}></Card>
				))}
			</div>
		</div>
	)
	return content
}

export default RandomCharacters
