import { useEffect, useState, FormEvent, ChangeEvent } from "react"

interface SymbolsEditorProps {
    symbols: string[] | undefined
    setSymbols: (symbols: string[]) => void
}

const SymbolsEditor = (props: SymbolsEditorProps) => {
    const { symbols, setSymbols } = props
    const [isInitialRender, setIsInitialRender] = useState(true)
    const [inputValues, setInputValues] = useState<string[]>([])

    useEffect(() => {
        if (symbols && isInitialRender) {
            console.log("symbols", symbols)

            setInputValues(symbols)
            setIsInitialRender(false)
        }
    }, [symbols, isInitialRender])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setSymbols(inputValues)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const values = e.currentTarget.value.split(",")
        setInputValues(values!)
    }

    return <div className="symbols-editor">
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValues.join(",")} onChange={handleChange} />
            {/* <input type="submit" value="Update" /> */}
        </form>
    </div>
}

export default SymbolsEditor