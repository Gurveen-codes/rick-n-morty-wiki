import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance as axios } from '../axios'
import RandomCharacters from '../components/RandomCharacters'

const Character = ({ match }) => {
	const charId = match.params.id
	const [charInfo, setCharInfo] = useState({})
	const [loading, setLoading] = useState(true)

	const fetchCharacterInfo = async (id) => {
		setLoading(true)
		const { data } = await axios.get(`/character/${id}`)
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
			<Link to="/">
				<span className="rounded font-semibold border-2 border-gray-600 text-gray-600 py-1 px-2 ml-3 hover:bg-gray-600 hover:text-white">
					Go Back
				</span>
			</Link>
			<main className="mx-4 mt-8 md:w-5/6 md:mx-auto">
				<section className=" grid md:grid-cols-3 md:grid-rows-6 md:gap-10  ">
					<div className="flex mb-4 items-center justify-center md:col-span-1 md:row-span-full md:justify-end  md:h-full">
						<img
							className=" object-cover md:h-full"
							src={charInfo.image}
							alt={charInfo.name}
						/>
					</div>
					<div className="grid gap-4 md:col-span-2 md:row-span-4 md:row-start-2 ">
						<h4 className="justify-self-center text-4xl text-semibold text-center md:justify-self-start">
							{charInfo.name}
						</h4>
						<div className="justify-self-center text-lg md:justify-self-start">
							<div className="">Species: {charInfo.species}</div>
							<div className="">Origin: {charInfo.origin.name}</div>
							<div className="">Current Location: {charInfo.location.name}</div>
							<div className="">
								Appeared In: {charInfo.episode.length} episodes
							</div>
						</div>
					</div>
				</section>
				<section className="my-8">
					<RandomCharacters number={5} />
				</section>
			</main>
		</>
	)
	return content
}

export default Character
