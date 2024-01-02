import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [amountConverted, setAmountConverted] = useState(0);

    const currencyInfo = useCurrencyInfo(from);    

    const options = Object.keys(currencyInfo);

    const swap = () => {

        setFrom(to);
        setTo(from);

        setAmount(amountConverted);
        setAmountConverted(amount);
    }

    const convert = () => {

        setAmountConverted(amount * currencyInfo[to]);
    }

    const bgImage = {
        backgroundImage: `url(https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover",
        object: "fit"
    }

    return (
    <>
        <div 
            className="w-full h-screen flex items-center justify-center  text-white"
            style={bgImage}
        >
            <div>
                <h2 className="text-center text-3xl">Currency Converter App.</h2>

                <div className="w-[35vw] h-[60vh] mt-12 backdrop-blur-xl bg-white/10 text-black rounded-xl px-6 py-8">
                    
                    <InputBox 
                        label="From" 
                        amount={amount}
                        onAmountChange={(amount) => (setAmount(amount))}
                        currencyOptions={options}
                        onCurrencyChange={(option) => (setFrom(option))}
                        selectCurrency={from}
                    />

                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white text-xl px-3 py-1"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>

                    <InputBox 
                        label="To" 
                        amount={amountConverted}
                        currencyOptions={options}
                        onCurrencyChange={(option) => setTo(option)}
                        selectCurrency={to}
                        amountDisable
                    />

                    <button type="submit" className="w-full bg-blue-600 text-white text-xl px-4 py-3 mt-4 rounded-lg hover:bg-blue-700" onClick={convert}>
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
