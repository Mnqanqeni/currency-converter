import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("zar");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    const tempFrom = from;
    const tempAmount = amount;
    setFrom(to);
    setTo(tempFrom);
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e)=>{
          e.preventDefault();
          convert()
        }}>
          <div className="w-full mb-1">
            <InputBox
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            selectedCurrency={from}
            ></InputBox>
          </div>
          <div className="relative w-full h-0.5">
            <button className="absolute left-1/2 border-white rounded-md bg-blue-600 px-2 py-0.5" onClick={swap}>swap</button>
          </div>
          <div className="w-full mb-1">
            <InputBox
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setTo(currency)}
          
            selectedCurrency={to}
            amountDisable={true}
            ></InputBox>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >Convert from {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
        </div>

      </div>
    </div>
  );
}

export default App;
