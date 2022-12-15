export const getLugar = async (lugar) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?country=ar%2Cbo%2Cbr%2Ccl%2Cco%2Ccr%2Ccu%2Cec%2Csv%2Cgt%2Cht%2Chn%2Cmx%2Cni%2Cpa%2Cpy%2Cpe%2Cdo%2Cuy%2Cve%2Cpr&limit=10&types=place%2Cpostcode%2Caddress%2Ccountry%2Cregion%2Cdistrict%2Clocality%2Cneighborhood%2Cpoi&language=es&autocomplete=true&access_token=pk.eyJ1IjoidG9iYWxpbm8iLCJhIjoiY2wzc3Q2d3R2MWdlYjNvcnNzMnB5cDZ3MyJ9.tuWZBXZoIN61RUySolA24Q`
	const resp = await fetch(url)
	const { features } = await resp.json()

	const data = features.map((lugar) => ({
		id: lugar.id,
		name: lugar.place_name,
		cordinates: {
			lng: lugar.center[0],
			lat: lugar.center[1],
		},
		title: lugar.text,
		country: lugar.context[lugar.context.length - 1].text,
	}))

	return data
}
