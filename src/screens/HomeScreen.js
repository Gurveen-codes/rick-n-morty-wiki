import React from 'react'
import CharacterGroup from '../components/CharacterGroup'

const HomeScreen = () => {
	return (
		<div>
			<CharacterGroup charName="rick" title="Citadel of ricks"></CharacterGroup>
			<CharacterGroup charName="morty" title="mortyplicity"></CharacterGroup>
			<CharacterGroup charName="beth" title="beth world"></CharacterGroup>
			<CharacterGroup charName="summer" title="summer town"></CharacterGroup>
			<CharacterGroup
				charName="jerry"
				title="sorry group of jerry's"
			></CharacterGroup>
		</div>
	)
}

export default HomeScreen
