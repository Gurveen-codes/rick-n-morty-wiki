import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance as axios } from '../axios'

const Character = ({ match }) => {
	const charId = match.params.id
	const [charInfo, setCharInfo] = useState({})
	const [loading, setLoading] = useState(true)

	const fetchCharacterInfo = async (id) => {
		setLoading(true)
		const { data } = await axios.get(`/character/${id}`)
		console.log(data)
		setCharInfo({ ...data })
		setLoading(false)
	}

	useEffect(() => {
		fetchCharacterInfo(charId)
	}, [charId])

	const content = loading ? (
		<p>Loading</p>
	) : (
		<>
			<Link to="/">Go Back</Link>
			<div>
				<img src={charInfo.image} alt={charInfo.name} />
				<h4>{charInfo.name}</h4>
				<div className="">Species: {charInfo.species}</div>
				<div className="">Origin: {charInfo.origin.name}</div>
				<div className="">Current Location: {charInfo.location.name}</div>
				<div className="">Appeared In: {charInfo.episode.length} episodes</div>
			</div>
		</>
	)
	return content
}

export default Character
