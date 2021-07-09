import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
	const [input, setInput] = useState('')

	return (
		<SearchContext.Provider value={{ input, setInput }}>
			{props.children}
		</SearchContext.Provider>
	)
}

export default SearchContextProvider
