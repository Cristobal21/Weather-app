import { useState } from "react"
import { WeatherItem } from "./WeatherItem"

export const PlaceItem = ({ name, title, country, cordinates, id }) => {
	const { lat, lng } = cordinates
	const [click, setClick] = useState(false)

	localStorage.setItem("lat", lat)
	localStorage.setItem("lng", lng)

	const handleClick1 = () => {
		setClick(true)
	}

	const handleClick2 = () => {
		setClick(false)
	}

	return (
		<div>
			{!click ? (
				<div
					onClick={handleClick1}
					className="bg-white border border-indigo-100 shadow-md rounded-lg w-96 px-5 py-5 mt-5 hover:bg-slate-200 hover:cursor-pointer"
				>
					<p className="text-right font-thin text-xs px-2">{country}</p>
					<p className="text-center text-lg text-indigo-500 font-bold px-5 pb-3">
						{title}
					</p>
					<p className="font-normal">{name}</p>
					<div className="flex justify-center gap-6 mt-2">
						<p className="font-light text-indigo-500">{`Lat: ${lat}`}</p>
						<p className="font-light text-indigo-500">{`Lng: ${lng}`}</p>
					</div>
				</div>
			) : (
				<div
					onClick={handleClick2}
					className="bg-white border border-indigo-100 shadow-md rounded-lg w-96 px-5 py-5 mt-5 hover:bg-slate-200 hover:cursor-pointer"
				>
					<WeatherItem />
				</div>
			)}
		</div>
	)
}
