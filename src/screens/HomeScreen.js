import React, { useState } from 'react'
import CharacterGroup from '../components/CharacterGroup'
import { axiosInstance as axios } from '../axios'
import Card from '../components/Card'

const HomeScreen = () => {
	const [input, setInput] = useState('')
	const [searchChars, setSearchChars] = useState([])
	const [searching, setSearching] = useState(false)
	const [loading, setLoading] = useState(true)
	const clickHandler = async () => {
		setLoading(true)
		setSearching(true)
		const { data } = await axios.get(`/character/?name=${input}`)
		setSearchChars([...data.results])
		setLoading(false)
	}

	return (
		<>
			<input
				className="border-2 border-black"
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={clickHandler}>Search</button>
			{searching && !loading ? (
				<div className="grid grid-cols-2 gap-2 mx-2 md:mx-6 md:grid-cols-4 md:gap-4">
					{searchChars.map((char) => (
						<Card key={char.id} char={char}></Card>
					))}
				</div>
			) : (
				<div>
					<CharacterGroup
						charName="rick"
						title="Citadel of ricks"
					></CharacterGroup>
					<CharacterGroup
						charName="morty"
						title="mortyplicity"
					></CharacterGroup>
					<CharacterGroup charName="beth" title="beth world"></CharacterGroup>
					<CharacterGroup
						charName="summer"
						title="summer town"
					></CharacterGroup>
					<CharacterGroup
						charName="jerry"
						title="sorry group of jerry's"
					></CharacterGroup>
				</div>
			)}
		</>
	)
}

export default HomeScreen
