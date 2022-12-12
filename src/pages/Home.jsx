import { useState } from "react"
import { AddNewPlace } from "../components/AddNewPlace"
import { PlaceGrid } from "../components/PlaceGrid"

function Home() {
	const [lugares, setLugares] = useState(["buin"])

	const onAddPlace = (newPlace) => {
		setLugares([newPlace])
	}

	return (
		<>
			<AddNewPlace onNewPlace={onAddPlace} />

			{lugares.map((lugar) => (
				<PlaceGrid key={lugar} lugar={lugar} />
			))}
		</>
	)
}

export default Home
