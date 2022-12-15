export const getClima = async (latitud, longitud) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=87a6024cfb90c7b58391cb691253d6fa&units=metric&lang=es`
	const resp = await fetch(url)

	const { coord, id, main, sys, visibility, wind, weather } = await resp.json()

	const { lat, lon } = coord
	const { humidity, temp, temp_min, temp_max } = main
	const { country } = sys
	const { speed } = wind
	const { description } = weather[0]

	const dataWeather = [
		{
			id,
			visibility,
			lon,
			lat,
			humidity,
			temp,
			temp_min,
			temp_max,
			country,
			speed,
			description,
		},
	]

	const data = dataWeather.map((clima) => ({
		id: clima.id,
		visibilidad: clima.visibility,
		longitud: clima.lon,
		latitud: clima.lat,
		humedad: clima.humidity,
		actual: clima.temp,
		minima: clima.temp_min,
		maxima: clima.temp_max,
		pais: clima.country,
		viento: clima.speed,
		descripcion: clima.description,
	}))

	return {
		data,
	}
}
