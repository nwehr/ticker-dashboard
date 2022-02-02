import { useSymbols } from "./hooks/useSymbols"

import SymbolsEditor from "./SymbolsEditor"
import Widget from "./Widget"

const WidgetList = () => {
	const { symbols, setSymbols } = useSymbols()

	return <>
		<SymbolsEditor symbols={symbols} setSymbols={setSymbols} />
        
		<div className="widget-list">
			{
				symbols?.map((symbol: string) => <Widget key={symbol} symbol={symbol} />)
			}
		</div>
	</>
}

export default WidgetList