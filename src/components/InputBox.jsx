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

    // formula for conversion usd to pkr. pkr = usd * 282.36286712
    const handleChangeCurrencyType = (value) => {
        setSelectedCurrency(value)
    }

    return (
        <>

            <div className="card-1 flex flex-col justify-between bg-white h-[35%] mx-5 mt-5 my-4 rounded-lg">

                {/* top text container */}
                <div className="top-text text-gray-400 flex justify-between mx-6 mt-6">
                    <p>{label}</p>
                    <p>Currency Type</p>
                </div>

                {/* input fields container */}
                <div className="input-containr flex justify-between mx-6 mb-6">

                    {/* number input field */}
                    <input ref={userValue} placeholder='0' value={convertedAmount && (convertedAmount).toFixed(2)} type="number" disabled={isDisable} className='pl-[4px] focus:outline-none placeholder:text-black' />

                    {/* drop down input */}
                    <select value={selectedCurrency || defaultValue} onChange={(e) => handleChangeCurrencyType(e.target.value)} className='focus:outline-none bg-[#d5d7dd8a] px-2 py-1 rounded-md'>
                        {currencyTypeData && Object.keys(currencyTypeData).map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox