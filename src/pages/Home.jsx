import { useState } from "react"

export const Home = () => {
	
	const [lugares, setLugares] = useState(["Londres"])

	const onAddPlace = ( newPlace ) => {
		setLugares([ newPlace ])
	}

	return (
		<>
			<Home
				onNewPlace = { onAddPlace }
			/>

			{
				lugares.map( (lugar) => (

				))
			}
		</>
	)
}
