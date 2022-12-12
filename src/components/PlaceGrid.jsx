import { useFetchLugar } from "../hooks/useFetchLugar"
import { PlaceItem } from "./PlaceItem"

export const PlaceGrid = ({ lugar }) => {
	const { lugares } = useFetchLugar(lugar)

	return (
		<>
			<div className="flex flex-col items-center">
				{lugares.map((data) => (
					<PlaceItem key={data.id} {...data} />
				))}
			</div>
		</>
	)
}
