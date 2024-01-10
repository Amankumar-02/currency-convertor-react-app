import { useState } from 'react'
// the html part 
import {InputBox} from './components'
// the custom hook
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState();
  // const [currency, setCurrency] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = ()=>{
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{setConvertedAmount(amount * currencyInfo[to])}
  // console.log(amount)
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1704071085149-2dd6f2e0a37a?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">

    {/* // here we link the inputbox */}
                        <InputBox
                            label="From"
                            amount = {amount}
                            onAmountChange={(newAmount)=>setAmount(newAmount)}
                            onCurrencyChange = {(currency)=> setFrom(currency)}
                            selectCurrency = {from}
                            currencyOptions = {options}
                        />

                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">

    {/* // here we link the inputbox */}
                        <InputBox
                            label="To"
                            amount = {convertedAmount}
                            amountDisable
                            onCurrencyChange = {(currency)=> setTo(currency)}
                            selectCurrency = {to}
                            currencyOptions = {options}
                        />

                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
