import { useRef, useState } from 'react'
import "./index.css"
import InputBox from './components/InputBox.jsx'
import { useCurrencyInfo } from './Hooks/useCurrencyInfo.js'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const userValue = useRef("")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [userAmount, setUserAmount] = useState(0)

  const currencyTypeData = useCurrencyInfo(from)

  // Function for currency conversion
  const convertAmount = (userAmountVar) => {
    setConvertedAmount(userAmountVar * parseFloat(currencyTypeData[to]))
  }

  // Function to swap the field and values
  const handleSwap = () => {
    setFrom(to)
    setTo(from)
    setUserAmount(0)
    setConvertedAmount(0)
    userValue.current.value = ""
  }

  return (
    <div className="bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-500 min-h-[100dvh] flex items-center justify-center p-2 sm:p-4">
      {/* Cards container */}
      <div className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
        <h1 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6 drop-shadow-lg">Currency Converter</h1>
        
        {/* Card 1 */}
        <InputBox
          label="From"
          defaultValue={from}
          currencyTypeData={currencyTypeData}
          selectedCurrency={from}
          setSelectedCurrency={setFrom}
          userValue={userValue}
        />

        {/* Swap button */}
        <div className="flex justify-center my-3 sm:my-4">
          <button 
            onClick={handleSwap} 
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-white/30 hover:from-indigo-600 hover:to-blue-600 hover:scale-110 hover:shadow-lg hover:rotate-2 transform transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m-12 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            Swap
          </button>
        </div>

        {/* Card 2 */}
        <InputBox
          label="To"
          defaultValue={to}
          selectedCurrency={to}
          setSelectedCurrency={setTo}
          currencyTypeData={currencyTypeData}
          isDisable={true}
          convertedAmount={convertedAmount}
        />

        {/* Convert Currency Button */}
        <div className="px-4 sm:px-5 mt-4 sm:mt-6">
          <button 
            onClick={() => {
              let userAmountVar = parseFloat(userValue.current.value)
              setUserAmount(userAmountVar)
              convertAmount(userAmountVar)
            }} 
            className="bg-gradient-to-r from-teal-400 to-cyan-400 text-gray-800 font-semibold py-2 sm:py-3 w-full rounded-lg hover:from-teal-500 hover:to-cyan-500 hover:-translate-y-1 hover:shadow-lg transform transition-all duration-300 text-sm sm:text-base"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App