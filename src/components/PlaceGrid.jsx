import { useFetchLugar } from "../hooks/useFetchLugar"
import { PlaceItem } from "./PlaceItem"

export const PlaceGrid = ({ lugar }) => {
	const { lugares } = useFetchLugar(lugar)

	return (
		<>
			<div className="grid grid-cols-4 grid-flow-row gap-4 mx-10 py-10 h-full">
				{lugares.map((data) => (
					<PlaceItem key={data.id} {...data} />
				))}
			</div>
		</>
	)
}
