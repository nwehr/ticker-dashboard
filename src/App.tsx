import React, { ChangeEvent, FormEvent, useState } from 'react';
import Widget from './Widget';

const GetToken = () => {
	const [token, setToken] = useState("")

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setToken(e.currentTarget.value)
	}

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		localStorage.setItem("finnhub_api_token", token)
		window.location.reload()
	}

	return <div>
		<form onSubmit={onSubmit} className="token">
			<label><a href="https://finnhub.io/">Finnhub</a> API Token</label>
			<div><input type="text" onChange={onChange} /></div>
			<div><input type="submit" value="Submit" /></div>
		</form>
	</div>
}

const App = () => {
	if (!localStorage.getItem("finnhub_api_token")) {
		return <GetToken />
	}

	let symbolsStr = localStorage.getItem("finnhub_symbols")

	if (!symbolsStr) {
		localStorage.setItem("finnhub_symbols", "AAPL, NVDA")
		symbolsStr = "AAPL, NVDA"
	}

	return <div className="App">
		{
			symbolsStr?.split(",").map((symbol: string) => <Widget key={symbol.trim()} symbol={symbol.trim()} />)
		}
	</div>
}

export default App;
