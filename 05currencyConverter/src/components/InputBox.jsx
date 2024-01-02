import React, { useId } from "react";

function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,
    }) 
    {
        
    const amountInputId = useId();
    const currencyTypeId = useId();

    return <>
        <div className="bg-zinc-100 px-4 py-2 mb-4 w-full flex rounded-lg">
            <div className=" flex flex-col w-1/2">
                <label htmlFor={amountInputId} className="text-black/80 text-lg mb-2 inline-block">{label}</label>
                    <input 
                        type="text" id={amountInputId} 
                        value={amount} 
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
                        className="px-2 py-2 outline-none"
                        disabled={amountDisable}
                    />
            </div>        
            <div className="flex flex-col w-1/2">
                <label htmlFor={currencyTypeId} className="text-black/80 text-lg mb-2 text-right inline-block">Currency Type</label>
                <select 
                    id={currencyTypeId} 
                    className="px-2 py-2 outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange((e.target.value))}
                    // onChange={(e) => onCurrencyChange}
                    disabled={currencyDisable}
                >
                {
                    currencyOptions.map( (options) => 
                        <option key={options} value={options}>
                            {options}
                        </option>)
                }
                </select> 
                        
            </div>        

        </div>

    </>;
}

export default InputBox;
