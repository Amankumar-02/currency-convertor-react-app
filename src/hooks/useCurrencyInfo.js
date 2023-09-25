import {useEffect, useState} from "react"
// create custom hook
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=> response.json())
        .then((fecthData)=>setData(fecthData[currency]))
        // console.log(data);
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;