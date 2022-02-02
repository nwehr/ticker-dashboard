import { useState, useEffect } from "react"

export const useLocalStorage = (key: string, defaultValue: string) => {
    const [value, _setValue] = useState<string | null>(null)

    useEffect(() => {
        let value = localStorage.getItem(key)
        
        if (value === null) {
            localStorage.setItem(key, defaultValue)
        }

        value = localStorage.getItem(key)

        _setValue(value!)
    }, [key, defaultValue])

    return {
        value
        , setValue: (value: string) => {
            localStorage.setItem(key, value)
            _setValue(value)
        }
    }
}