import { useEffect, useState } from "react"
import { getLugar } from "../helpers/getLugar"

export const useFetchLugar = (lugar) => {
	const [lugares, setLugares] = useState([])

	try {
		const obtenerLugar = async () => {
			const nuevosLugares = await getLugar(lugar)
			setLugares(nuevosLugares)
		}
	
		useEffect(() => {
			obtenerLugar()
		}, [])
	} catch (error) {
		console.log('Error en el servidor: ', error)
	}

	return {
		lugares,
	}
}
