import { useRef, useState } from 'react'
import "./index.css"
import { InputBox } from './components/importIndex.js'
import { useCurrencyInfo } from './Hooks/useCurrencyInfo.js'

function App() {

  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const userValue = useRef("")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [userAmount, setUserAmount] = useState(0)

  const currencyTypeData = useCurrencyInfo(from)

  // function for currency conversion
  const convertAmount = (userAmountVar) => {
    setConvertedAmount(userAmountVar * parseFloat(currencyTypeData[to]))
  }

  // function for swap the field and values
  const handleSwap = () => {
    // swap currency types
    setFrom(to)
    setTo(from)

    // swap amounts
    setUserAmount(0)
    setConvertedAmount(0)

    // reset value to 0 on card 1 input field
    userValue.current.value = ""
  }

  return (
  <>
    <div className="bg-gray-950 h-[100vh] flex justify-center items-center" style={{
      backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/040/959/652/non_2x/currency-exchange-concept-with-graph-chart-and-dollar-coin-forex-trading-financial-markets-and-global-economy-design-background-illustration-vector.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

      {/* cards container */}
      <div className="cards-container bg-[#a9b5c55e] border-[1px] border-[#a9b5c5] rounded-lg h-[60%] w-[40%] relative">

        {/* card 1 */}
        <InputBox
          label="From"
          defaultValue={from}
          currencyTypeData={currencyTypeData}
          selectedCurrency={from}
          setSelectedCurrency={setFrom}
          userValue={userValue}
        />

        {/* swap button */}
        <div className='absolute left-1/2 top-[155px] -translate-x-1/2 -translate-y-1/2'>
          <button onClick={handleSwap} className='bg-blue-800 text-white px-3 py-1.5 rounded-md border-white border-[1px]'>swap</button>
        </div>

        {/* card 2 */}
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
        <div className='px-5'>
          <button onClick={ () => {
            let userAmountVar = parseFloat(userValue.current.value)
            setUserAmount(userAmountVar)
            convertAmount(userAmountVar)
            }} className='bg-blue-800 text-white py-[10px] w-full rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
