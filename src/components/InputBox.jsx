import React from "react";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDidabled = false,
  className = "",
}) {
  return (
    <>
      <div className={`bg-white p-3  text-sm flex ${className}`}>
        <div className="w-1/2">
          <label htmlFor="currency" className="text-black/40 mb-2 inline-block">{label}</label>
          <input
            id="currency"
            type="number"
            className="outline-none w-full bg-transparent"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="w-1/2 flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full"> Currency Type</p>
          <select
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
