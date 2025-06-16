function InputBox({
  label,
  defaultValue,
  currencyTypeData,
  selectedCurrency,
  setSelectedCurrency,
  isDisable,
  userValue,
  convertedAmount
}) {
  const handleChangeCurrencyType = (value) => {
    setSelectedCurrency(value)
  }

  return (
    <div className="flex flex-col bg-white/20 backdrop-blur-md rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 hover:shadow-md transition-all duration-300">
      {/* Top text container */}
      <div className="flex justify-between text-gray-200 text-xs sm:text-sm mb-2 sm:mb-3">
        <p>{label}</p>
        <p>Currency Type</p>
      </div>

      {/* Input fields container */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3">
        {/* Number input field */}
        <input 
          ref={userValue} 
          placeholder="0" 
          value={convertedAmount && convertedAmount.toFixed(2)} 
          type="number" 
          disabled={isDisable} 
          className={`flex-1 p-2 sm:p-3 rounded-lg ${isDisable ? 'bg-gray-200/50 text-gray-600' : 'bg-white/50 text-gray-800'} placeholder:text-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300`} 
        />

        {/* Drop down input */}
        <select 
          value={selectedCurrency || defaultValue} 
          onChange={(e) => handleChangeCurrencyType(e.target.value)} 
          className="p-2 sm:p-3 rounded-lg bg-white/50 text-gray-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
        >
          {currencyTypeData && Object.keys(currencyTypeData).map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox