import { useState } from "react"

export const AddNewPlace = ({ onNewPlace }) => {
	const [inputValue, setInputValue] = useState("")
	const [result, setResult] = useState(false)

	const onInputChange = ({ target }) => {
		setInputValue(target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (inputValue.trim().length <= 1) return
		onNewPlace(inputValue.trim())
		setResult(true)
	}

	return (
		<div className="flex items-center flex-col">
			<form onSubmit={onSubmit} className="my-10">
				<input
					type="text"
					name="buscador"
					id="buscador"
					value={inputValue}
					onChange={onInputChange}
					placeholder="Busca un lugar de latinoamérica"
					autoComplete="off"
					className="w-96 px-3 py-3 rounded-md border border-indigo-400 text-center mx-auto shadow-sm form-control"
				/>
			</form>
			{result ? (
				<p className="font-extralight text-sm">{`Resultados relacionados con ${inputValue}`}</p>
			) : (
				<p></p>
			)}
		</div>
	)
}
