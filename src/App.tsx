import GetToken from "./GetToken"
import WidgetList from "./WidgetList"

const App = () => {
	if (!localStorage.getItem("finnhub_api_token")) {
		return <GetToken />
	}

	return <div className="App">
		<WidgetList />
	</div>
}

export default App