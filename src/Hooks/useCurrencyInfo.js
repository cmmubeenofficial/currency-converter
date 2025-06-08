import { useEffect, useState } from "react"

export const useCurrencyInfo = (currencyType) => {
    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchData() {
            const API_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyType}.json?cache-bust=${new Date().getTime()}`
            const res = await fetch(API_URL)
            const jsonData = await res.json()
            setData(jsonData[currencyType])

        }
        fetchData()
    }, [currencyType])
    return data
}