import { useCallback, useEffect, useState } from "react"
import moment, { now } from "moment"

import { pushReqest } from "../requestQueue"

const quoteIntervalMS = 30000
const candleIntervalMS = 300000

export const useFinnhub = (symbol: string) => {
    const [name, setName] = useState("")
    const [current, setCurrent] = useState(0.0)
    const [change, setChange] = useState(0.0)
    const [chartData, setChartData] = useState<any[]>([])

    const [quoteUpdatedTime, setQuoteUpdatedTime] = useState<number>(0)
    const [chartUpdatedTime, setChartUpdatedTime] = useState<number>(0)

    const getProfile = useCallback(async (token: string) => {
        const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${token}`

        pushReqest(url, (data: any) => {
            setName(data.name)
        })
    }, [symbol])

    const getQuote = useCallback(async (token: string) => {
        const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`

        pushReqest(url, (data: any) => {
            const current = data.c
            const change = data.c - data.o
            const updated = now()

            setCurrent(current)
            setChange(change)
            setQuoteUpdatedTime(updated)
        })
    }, [symbol])

    const getCandles = useCallback(async (token: string) => {
        const end = moment().unix()
        const start = moment().subtract(6, 'months').unix()

        const url = `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&token=${token}&resolution=D&from=${start}&to=${end}`

        pushReqest(url, (data: any) => {
            const chartData = []

            if (data.c) {
                for (let i = 0; i < data.c.length; i++) {
                    chartData.push({ x: i + 1, y: data.c[i] })
                }
            }

            setChartData(chartData)
            setChartUpdatedTime(now())
        })
    }, [symbol])

    useEffect(() => {
        console.log("dependencies:", [symbol, getProfile, getQuote, getCandles])

        const token = localStorage.getItem("finnhub_api_token")!

        getProfile(token)
        getQuote(token)
        getCandles(token)

        const quoteInterval = setInterval(() => {
            getQuote(token)
        }, quoteIntervalMS)

        const candleInterval = setInterval(() => {
            getCandles(token)
        }, candleIntervalMS)

        return () => {
            clearInterval(quoteInterval)
            clearInterval(candleInterval)
        }
    }, [symbol, getProfile, getQuote, getCandles])


    return {
        name
        , current
        , change
        , chartData
        , quoteUpdatedTime
        , chartUpdatedTime
    }
}