import { useEffect, useState } from "react"
import { getClima } from "../helpers/getClima"

export const useFetchClima = (lat, lng) => {
	const [clima, setClima] = useState([])

	const obtenerClima = async () => {
		const nuevoClima = await getClima(lat, lng)
		setClima(nuevoClima)
	}

	useEffect(() => {
		obtenerClima()
	}, [])

	return {
		clima,
	}
}
