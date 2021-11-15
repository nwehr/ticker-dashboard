import GetToken from "./GetToken"
import Widget from "./Widget"

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

export default App