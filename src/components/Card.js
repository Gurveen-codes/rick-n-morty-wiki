import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ char }) => {
	return (
		<div className="rounded border-2 border-gray-400">
			<Link to={`/${char.id}`}>
				<img
					className="w-full h-40 object-cover"
					src={char.image}
					alt={char.name}
				/>
				<h2 className="text-center text-xl font-semibold my-3">{char.name}</h2>
			</Link>
		</div>
	)
}

export default Card
