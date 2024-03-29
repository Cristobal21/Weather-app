import { useFetchClima } from "../hooks/useFetchClima"

export const WeatherItem = () => {
	const lat = localStorage.getItem("lat")
	const lng = localStorage.getItem("lng")

	const { clima } = useFetchClima(lat, lng)
	const { data } = clima

	return (
		<>
			{data?.map((info) => (
				<div key={info.id} className="w-full h-full [&>div]:flex [&>div]:gap-x-2 [&>div>p]:text-lg">
					<div className="">
						<p className="text-indigo-400">{`Estado clima:`}</p>
						<p className="capitalize">{info.descripcion}</p>
					</div>

					<div className="">
						<p className="text-indigo-400">{`Humedad ambiente:`}</p>
						<p>{`${info.humedad}%`}</p>
					</div>

					<div className="">
						<p className="text-indigo-400">{`Temperatura actual:`}</p>
						<p>{`${info.actual}°`}</p>
					</div>

					<div className="">
						<p className="text-indigo-400">{`Temperatura Mínima:`}</p>
						<p>{`${info.minima}°`}</p>
					</div>

					<div className="">
						<p className="text-indigo-400">{`Temperatura Máxima:`}</p>
						<p>{`${info.maxima}°`}</p>
					</div>

					<div className="">
						<p className="text-indigo-400">{`Velocidad del viento:`}</p>
						<p>{`${info.viento} k/m`}</p>
					</div>

					<div className="">
						<p className="text-indigo-400">{`Visibilidad actual:`}</p>
						<p>{`${info.visibilidad} mts`}</p>
					</div>
				</div>
			))}
		</>
	)
}
