import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"

export const useFinnhub = (symbol: string) => {
    const [name, setName] = useState("")
    const [current, setCurrent] = useState(0.0)
    const [change, setChange] = useState(0.0)
    const [chartData, setChartData] = useState<any[]>([])


    const getProfile = useCallback(async (token: string) => {
        const resp = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${token}`)
        setName(resp.data.name)
    }, [symbol])

    const getQuote = useCallback(async (token: string) => {
        const resp = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`)
        setCurrent(resp.data.c)
        setChange(resp.data.c - resp.data.o)
    }, [symbol])

    const getCandles = useCallback(async (token: string) => {
        const end = moment().unix()
        const start = moment().subtract(6, 'months').unix()

        const resp = await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&token=${token}&resolution=D&from=${start}&to=${end}`)

        const data = []

        for (let i = 0; i < resp.data.c.length; i++) {
            data.push({ x: i + 1, y: resp.data.c[i] })
        }

        setChartData(data)
    }, [symbol])

    useEffect(() => {
        const token = localStorage.getItem("finnhub_api_token")!
        getProfile(token)
        getQuote(token)
        getCandles(token)

        clearInterval((window as any)["quote_" + symbol]);
        (window as any)["quote_" + symbol] = setInterval(() => {
            getQuote(token)
        }, 60000)

        clearInterval((window as any)["candles_" + symbol]);
        (window as any)["candles_" + symbol] = setInterval(() => {
            getCandles(token)
        }, 90000)

    }, [symbol, getProfile, getQuote, getCandles])

    return {
        name
        , current
        , change
        , chartData
    }
}