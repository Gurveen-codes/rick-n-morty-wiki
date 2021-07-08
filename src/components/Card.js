import React from 'react'

const Card = ({ char }) => {
	return (
		<div className="rounded border-2 border-gray-400">
			<img
				className="w-full h-40 object-cover"
				src={char.image}
				alt={char.name}
			/>
			<h2 className="text-center text-xl font-semibold my-1">{char.name}</h2>
			<div className="mb-2 text-center">
				<span className="border-b border-black pb-1">Current Location</span>
			</div>
			<h3 className="text-lg mb-1 text-center font-medium">
				{char.location.name}
			</h3>
		</div>
	)
}

export default Card
