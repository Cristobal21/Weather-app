import { useEffect, useState } from "react"
import { getLugar } from "../helpers/getLugar"

export const useFetchLugar = (lugar) => {
	const [lugares, setLugares] = useState([])

	const obtenerLugar = async () => {
		const nuevosLugares = await getLugar(lugar)
		setLugares(nuevosLugares)
	}

	useEffect(() => {
		obtenerLugar()
	}, [])

	return {
		lugares,
	}
}
