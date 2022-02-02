import { useEffect } from "react"

export const useEvent = (name: string, handler: (detail: any) => void) => {
    useEffect(() => {
        const handlerWrapper = (eventDict: CustomEventInit) => {
            handler(eventDict.detail)
        }

        document.addEventListener(name, handlerWrapper)

        return () => {
            document.removeEventListener(name, handlerWrapper)
        }
    }, [name, handler])
}

export const dispatchEvent = (name: string, detail: any) => {
    document.dispatchEvent(new CustomEvent(name, { detail }))
}
