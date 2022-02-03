import { useEffect, useState } from 'react'
import { useFinnhub } from "./hooks/useFinnhub"

import Chart from "./Chart"

export interface WidgetProps {
    symbol: string
}

const Widget = (props: WidgetProps) => {
    const { name, current, change, chartData } = useFinnhub(props.symbol)
    const [lastQuote, setLastQuote] = useState(current)
    const [lastQuoteChange, setLastQuoteChange] = useState(0)
    const [className, setClassName] = useState("widget")

    useEffect(() => {
        if (current && lastQuote && current !== lastQuote) {
            setLastQuoteChange(current - lastQuote)
        }

        setLastQuote(current)
    }, [current, lastQuote])

    useEffect(() => {
        if (lastQuoteChange === 0) {
            return
        }

        if (lastQuoteChange < 0) {
            setClassName("widget blink-red")
        } else {
            setClassName("widget blink-green")
        }

        const timeout = setTimeout(() => {
            setClassName("widget")
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [lastQuoteChange])

    return <div className={className}>
        <div className="grid-container">
            <div className="profile">
                <h3>{props.symbol}</h3>
                <p>{name}</p>
            </div>

            <div className="quote">
                <h3>{current}</h3>
                <p className={change < 0 ? "red" : "green"}>{Math.round(change * 100) / 100}</p>
            </div>
        </div>

        <Chart chartData={chartData} />
    </div>
}



export default Widget