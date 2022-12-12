export const PlaceItem = ({ name, title, country, cordinates, id }) => {
	const { lat, lng } = cordinates

	return (
		<div className="bg-white border rounded-lg w-96 px-5 py-5 mt-5 hover:bg-slate-200 hover:cursor-pointer">
			<p className="text-right font-thin text-xs">{country}</p>
			<h1 className="text-center font-bold px-5 pb-3">{title}</h1>
			<p className="font-normal">{name}</p>
			<div className="flex justify-center gap-6">
				<p className="font-light">{`Lat: ${lat}`}</p>
				<p className="font-light">{`Lng: ${lng}`}</p>
			</div>
		</div>
	)
}
