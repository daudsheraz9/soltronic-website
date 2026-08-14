"use client";

import { useState } from 'react';

export default function SavingsCalculator() {
  const [bill, setBill] = useState<number | string>(0);
  const [systemSize, setSystemSize] = useState('10 kW');
  const [roofArea, setRoofArea] = useState<number | string>(0);
  const [savings, setSavings] = useState(0);

  const calculateSavings = () => {
    const numBill = Number(bill) || 0;
    setSavings(numBill * 12);
  };

  return (
    <div className="flex-grow bg-surface-container-lowest rounded-xl p-3 sm:p-4 shadow-sm flex flex-col gap-3 sm:gap-4 transition-transform duration-500 hover:-translate-y-1">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div>
          <label className="block text-[8px] sm:text-[10px] font-bold text-on-surface-variant mb-1 uppercase truncate">Monthly Bill</label>
          <input 
            type="number" 
            value={bill} 
            onChange={(e) => setBill(e.target.value)}
            className="w-full border border-outline-variant/30 rounded p-1 sm:p-2 text-xs sm:text-sm text-on-surface font-bold bg-transparent outline-none focus:border-primary transition-colors" 
          />
        </div>
        <div>
          <label className="block text-[8px] sm:text-[10px] font-bold text-on-surface-variant mb-1 uppercase truncate">System Size</label>
          <div className="relative">
            <select 
              value={systemSize}
              onChange={(e) => setSystemSize(e.target.value)}
              className="w-full border border-outline-variant/30 rounded p-1 sm:p-2 text-xs sm:text-sm text-on-surface font-bold bg-transparent outline-none focus:border-primary appearance-none pr-6 sm:pr-8 transition-colors"
            >
              <option>5 kW</option>
              <option>10 kW</option>
              <option>15 kW</option>
              <option>20 kW</option>
              <option>25 kW</option>
              <option>50 kW</option>
            </select>
            <span className="material-symbols-outlined absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[14px] sm:text-[16px] text-on-surface-variant">expand_more</span>
          </div>
        </div>
        <div>
          <label className="block text-[8px] sm:text-[10px] font-bold text-on-surface-variant mb-1 uppercase truncate">Roof Area</label>
          <input 
            type="number" 
            value={roofArea} 
            onChange={(e) => setRoofArea(e.target.value)}
            className="w-full border border-outline-variant/30 rounded p-1 sm:p-2 text-xs sm:text-sm text-on-surface font-bold bg-transparent outline-none focus:border-primary transition-colors" 
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-2 sm:gap-3">
        <div className="bg-primary-container/10 p-2 sm:px-4 rounded-lg border border-primary/10 flex-grow flex items-center justify-between">
          <span className="text-[9px] sm:text-[10px] text-on-surface-variant uppercase font-bold mr-2">Est. Savings</span>
          <span className="text-base sm:text-xl font-bold text-primary leading-none whitespace-nowrap">Rs. {savings.toLocaleString()}</span>
        </div>
        <button 
          onClick={calculateSavings}
          className="bg-black text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded text-xs sm:text-sm font-bold flex shrink-0 items-center gap-1 sm:gap-2 hover:bg-neutral-800 transition-all shadow-lg"
        >
          <span className="hidden sm:inline">Calculate</span> <span className="material-symbols-outlined text-[14px] sm:text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
