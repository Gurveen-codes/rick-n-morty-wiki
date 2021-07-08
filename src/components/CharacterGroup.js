import React, { useEffect, useState } from 'react'
import { axiosInstance as axios } from '../axios'
import Card from './Card'

const CharacterGroup = ({ charName, title }) => {
	const [chars, setChars] = useState([])

	const fetchCharacter = async (name) => {
		const { data } = await axios.get(`/character/?name=${name}`)
		setChars(data.results)
	}

	useEffect(() => {
		fetchCharacter(charName)
	}, [charName])

	return (
		<section className="my-10 mx-8">
			<h1 className="uppercase text-3xl">{title}</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-4">
				{chars.slice(0, 8).map((char) => (
					<Card key={char.id} char={char}></Card>
				))}
			</div>
		</section>
	)
}

export default CharacterGroup
