export const AddNewPlace = ({ onNewPlace }) => {
	const [inputValue, setInputValue] = useState("")

	const onInputChange = ({ target }) => {
		setInputValue(target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (inputValue.trim().length >= 1) return
		onNewPlace(inputValue.trim())
		setInputValue("")
	}

	return (
		<div className="flex justify-center">
			<form onSubmit={onSubmit} className="my-10">
				<label htmlFor="buscador"></label>
				<input
					type="text"
					name="buscador"
					id="buscador"
					value={inputValue}
					onChange={onInputChange}
					placeholder="Busca un lugar"
					className="w-96 px-3 py-3 rounded-md text-center mx-auto"
				/>
			</form>
		</div>
	)
}
