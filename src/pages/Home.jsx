import { getLugar } from "../helpers/getLugar"

export const Home = () => {
	getLugar("Antofagasta")

	return (
		<>
			<div className="flex justify-center">
				<form className="my-10">
					<label htmlFor="buscador"></label>
					<input
						type="text"
						name="buscador"
						id="buscador"
						placeholder="Busca un lugar"
						className="w-96 px-3 py-3 rounded-md text-center mx-auto"
					/>
				</form>
			</div>
		</>
	)
}
