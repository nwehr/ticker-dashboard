import axios from "axios"
import moment from "moment"
import React, { useCallback, useEffect, useState } from "react"

// @ts-ignore
import { XYPlot, LineSeries } from 'react-vis'

import "./Widget.css"

export interface WidgetProps {
    symbol: string
}

const Widget = (props: WidgetProps) => {
    const [name, setName] = useState("")
    const [current, setCurrent] = useState(0.0)
    const [change, setChange] = useState(0.0)
    const [chartData, setChartData] = useState<any[]>([])


    const getProfile = useCallback(async (token: string) => {
        const resp = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${props.symbol}&token=${token}`)
        setName(resp.data.name)
    }, [props.symbol])

    const getQuote = useCallback(async (token: string) => {
        const resp = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${token}`)
        setCurrent(resp.data.c)
        setChange(resp.data.c - resp.data.o)
    }, [props.symbol])

    const getCandles = useCallback(async (token: string) => {
        const end = moment().unix()
        const start = moment().subtract(6, 'months').unix()

        console.log(end - start)

        const resp = await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${props.symbol}&token=${token}&resolution=D&from=${start}&to=${end}`)
        // const resp = await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${props.symbol}&token=${token}&resolution=1&from=1631022248&to=1631627048`)

        const data = []

        console.log(resp.data)

        for (let i = 0; i < resp.data.c.length; i++) {
            data.push({ x: i + 1, y: resp.data.c[i] })
        }

        setChartData(data)
    }, [props.symbol])

    useEffect(() => {
        const token = localStorage.getItem("finnhub_api_token")!
        getProfile(token)
        // getQuote(token)
        getCandles(token)

        clearInterval((window as any).quoteInterval);
        (window as any).quoteInterval = setInterval(() => {
            getQuote(token)
        }, 5000)

    }, [getProfile, getQuote, getCandles])

    return <div className="widget">
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

        {
            chartData.length
                ? <div className="chart">
                    <XYPlot width={300} height={80} margin={0} style={{ fill: "none" }} >
                        <LineSeries strokeWidth={2} color={chartData[chartData.length - 1].y - chartData[0].y < 0 ? "#dc322f" : "#859900"} data={chartData} />
                    </XYPlot>
                </div>
                : null
        }
    </div>
}

export default Widget