import { useEffect } from "react"

export const useInterval = (handler: () => void, ms: number) => {
    useEffect(() => {
        const id = setInterval(handler, ms)

        return () => {
            clearInterval(id)
        }
    }, [handler, ms])
}