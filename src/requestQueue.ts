import axios from "axios"

interface RequestQueueItem {
    url: string
    callback: (data: any) => void
}

const requestQueue: RequestQueueItem[] = []

export const pushReqest = (url: string, callback: (data: any) => void) => {
    requestQueue.push({ url, callback })
}

export const processRequestQueue = async () => {
    if (requestQueue.length) {
        const { url, callback } = requestQueue.shift()!
        const { data } = await axios.get(url)
        
        console.log(url)
        
        callback(data)
    }

    setTimeout(processRequestQueue, 1000)
}