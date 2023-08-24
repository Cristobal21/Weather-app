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
					className="w-96 px-4 py-4 rounded-md text-lg text-center mx-auto shadow form-control focus:outline-none"
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
