import { useLocalStorage } from "./useLocalStorage"

export const useSymbols = () => {
    const { value, setValue } = useLocalStorage("finnhub_symbols",  "AAPL,TSLA,AMD,NVDA,INTC")

    return {
        symbols: value?.split(",").map((symbol: string) => symbol.trim())
        , setSymbols: (symbols: string[]) => {
            setValue(symbols.map((symbol: string) => symbol.trim()).join(", "))
        }
    }
}