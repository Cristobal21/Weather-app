import { useFetchClima } from "../hooks/useFetchClima"

export const WeatherItem = () => {
	const lat = localStorage.getItem("lat")
	const lng = localStorage.getItem("lng")

	const { clima } = useFetchClima(lat, lng)
	const { data } = clima

	return (
		<div>
			{data?.map((info) => (
				<div key={info.id}>
					<div className="flex gap-2">
						<p className="text-md text-indigo-400">{`Estado clima:`}</p>
						<p>{info.descripcion.toUpperCase()}</p>
					</div>

					<div className="flex gap-2">
						<p className="text-md text-indigo-400">{`Humedad ambiente:`}</p>
						<p>{info.humedad}</p>
					</div>

					<div className="flex gap-2">
						<p className="text-md text-indigo-400">{`Temperatura actual:`}</p>
						<p>{info.actual}</p>
					</div>

					<div className="flex gap-2">
						<p className="text-md text-indigo-400">{`Temperatura Mínima:`}</p>
						<p>{info.minima}</p>
					</div>

					<div className="flex gap-2">
						<p className="text-md text-indigo-400">{`Temperatura Máxima:`}</p>
						<p>{info.maxima}</p>
					</div>

					<div className="flex gap-2">
						<p className="text-md text-indigo-400">{`Velocidad del viento:`}</p>
						<p>{info.viento}</p>
					</div>

					<div className="flex gap-2">
						<p className="text-md text-indigo-400">{`Visibilidad actual:`}</p>
						<p>{info.visibilidad}</p>
					</div>
				</div>
			))}
		</div>
	)
}
