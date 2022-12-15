import { useFetchLugar } from "../hooks/useFetchLugar"
import { PlaceItem } from "./PlaceItem"

export const PlaceGrid = ({ lugar }) => {
	const { lugares } = useFetchLugar(lugar)

	return (
		<>
			<div className="flex flex-col items-center mb-8 md:grid md:grid-cols-2 md:place-items-center lg:mx-36 min-[1650px]:mx-60 2xl:grid-cols-3 gap-4">
				{lugares.map((data) => (
					<PlaceItem key={data.id} {...data} />
				))}
			</div>
		</>
	)
}
