import { useLocalStorage } from "./useLocalStorage"

export const useSymbols = () => {
    const { value, setValue } = useLocalStorage("finnhub_symbols",  "AAPL, NVDA")

    return {
        symbols: value?.split(",").map((symbol: string) => symbol.trim())
        , setSymbols: (symbols: string[]) => {
            setValue(symbols.map((symbol: string) => symbol.trim()).join(", "))
        }
    }
}