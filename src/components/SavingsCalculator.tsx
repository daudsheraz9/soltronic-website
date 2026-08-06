"use client";

import { useState } from 'react';

export default function SavingsCalculator() {
  const [bill, setBill] = useState<number | string>(0);
  const [systemSize, setSystemSize] = useState('10 kW');
  const [roofArea, setRoofArea] = useState<number | string>(0);
  const [savings, setSavings] = useState(0);

  const calculateSavings = () => {
    const numBill = Number(bill) || 0;
    // Simple calculation: saving 100% of the monthly bill over 12 months
    setSavings(numBill * 12);
  };

  return (
    <div className="flex-grow bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-wrap items-end gap-4">
      <div className="flex-grow min-w-[150px]">
        <label className="block text-xs font-bold text-on-surface-variant mb-2 uppercase">Monthly Electricity Bills</label>
        <input 
          type="number" 
          value={bill} 
          onChange={(e) => setBill(e.target.value)}
          className="w-full border border-outline-variant/30 rounded p-3 text-on-surface font-bold bg-transparent outline-none focus:border-primary" 
        />
      </div>
      <div className="flex-grow min-w-[150px]">
        <label className="block text-xs font-bold text-on-surface-variant mb-2 uppercase">System Size</label>
        <div className="relative">
          <select 
            value={systemSize}
            onChange={(e) => setSystemSize(e.target.value)}
            className="w-full border border-outline-variant/30 rounded p-3 text-on-surface font-bold bg-transparent outline-none focus:border-primary appearance-none pr-10"
          >
            <option>5 kW</option>
            <option>10 kW</option>
            <option>15 kW</option>
            <option>20 kW</option>
            <option>25 kW</option>
            <option>50 kW</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-sm text-on-surface-variant">expand_more</span>
        </div>
      </div>
      <div className="flex-grow min-w-[150px]">
        <label className="block text-xs font-bold text-on-surface-variant mb-2 uppercase">Roof Area (sq.ft)</label>
        <input 
          type="number" 
          value={roofArea} 
          onChange={(e) => setRoofArea(e.target.value)}
          className="w-full border border-outline-variant/30 rounded p-3 text-on-surface font-bold bg-transparent outline-none focus:border-primary" 
        />
      </div>
      <div className="bg-primary-container/10 p-4 rounded-lg border border-primary/10">
        <p className="text-[10px] text-on-surface-variant uppercase font-bold">Estimated Savings</p>
        <p className="text-headline-md font-bold text-primary">Rs. {savings.toLocaleString()}/year</p>
      </div>
      <button 
        onClick={calculateSavings}
        className="bg-black text-white px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-neutral-800 transition-all"
      >
        Calculate Savings <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </div>
  );
}
