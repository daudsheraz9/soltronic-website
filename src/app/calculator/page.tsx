"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CalculatorPage() {
  const [monthlyUnits, setMonthlyUnits] = useState(900);
  const [roofOrientation, setRoofOrientation] = useState('south');
  const [disco, setDisco] = useState('lesco');
  const [shading, setShading] = useState('none');
  const [systemType, setSystemType] = useState('ongrid');
  const [usagePattern, setUsagePattern] = useState('balanced');

  const [savings, setSavings] = useState(0);
  const [payback, setPayback] = useState(0);
  const [co2, setCo2] = useState(0);
  const [systemKw, setSystemKw] = useState(0);
  const [systemCost, setSystemCost] = useState(0);

  useEffect(() => {
    // 1. Constants
    const DISCO_YIELDS: Record<string, number> = {
      lesco: 1650, iesco: 1600, mepco: 1700, fesco: 1650, gepco: 1600,
      pesco: 1650, hesco: 1800, sepco: 1850, qesco: 1950, ke: 1750,
    };
    const ORIENTATION_FACTORS: Record<string, number> = {
      south: 1.0, se: 0.97, sw: 0.97, east: 0.90, west: 0.90, north: 0.70,
    };
    const SHADING_FACTORS: Record<string, number> = {
      none: 1.0, low: 0.95, medium: 0.85, high: 0.75,
    };

    // Self-consumption estimates based on usage pattern and system type
    const getSelfConsumption = () => {
      if (systemType === 'hybrid') {
        if (usagePattern === 'daytime') return 0.90;
        if (usagePattern === 'balanced') return 0.80;
        return 0.70; // nighttime
      } else {
        if (usagePattern === 'daytime') return 0.70;
        if (usagePattern === 'balanced') return 0.50;
        return 0.30; // nighttime
      }
    };

    const TARIFF_IMPORT = 65; // Estimated PKR/kWh
    const TARIFF_EXPORT = 27; // Estimated PKR/kWh for exported units
    const COST_PER_KW_ONGRID = 150000;
    const COST_PER_KW_HYBRID = 200000;
    const DEGRADATION_RATE = 0.005; // 0.5% per year
    
    // 2. Core Calculations
    const pvYield = DISCO_YIELDS[disco] || 1650;
    const adjustedYield = pvYield * (ORIENTATION_FACTORS[roofOrientation] || 1.0) * (SHADING_FACTORS[shading] || 1.0);
    
    const annualUnits = monthlyUnits * 12;
    const targetSolarGen = annualUnits * 0.85; // Target 85% coverage
    
    let requiredKw = targetSolarGen / adjustedYield;
    requiredKw = Math.max(3, Math.round(requiredKw * 10) / 10); // Minimum 3kW, round to 1 decimal
    
    const year1Gen = requiredKw * adjustedYield;
    const selfConsumptionRate = getSelfConsumption();
    
    const selfConsumedKwh = year1Gen * selfConsumptionRate;
    const exportedKwh = year1Gen - selfConsumedKwh;
    
    const year1Savings = (selfConsumedKwh * TARIFF_IMPORT) + (exportedKwh * TARIFF_EXPORT);
    const estCost = requiredKw * (systemType === 'hybrid' ? COST_PER_KW_HYBRID : COST_PER_KW_ONGRID);
    
    const paybackPeriod = estCost / year1Savings;
    
    // 20 Year calculations with degradation
    let total20YearSavings = 0;
    let total20YearCo2 = 0;
    let currentYearGen = year1Gen;
    
    for (let i = 0; i < 20; i++) {
      const currentSelfConsumed = currentYearGen * selfConsumptionRate;
      const currentExported = currentYearGen - currentSelfConsumed;
      const currentSavings = (currentSelfConsumed * TARIFF_IMPORT) + (currentExported * TARIFF_EXPORT);
      
      total20YearSavings += currentSavings;
      total20YearCo2 += (currentYearGen * 0.85 / 1000); // tons of CO2
      
      currentYearGen *= (1 - DEGRADATION_RATE);
    }

    setSystemKw(requiredKw);
    setSystemCost(Math.round(estCost));
    setSavings(Math.round(total20YearSavings));
    setPayback(paybackPeriod);
    setCo2(Math.round(total20YearCo2));
  }, [monthlyUnits, roofOrientation, disco, shading, systemType, usagePattern]);

  return (
    <main className="pt-8 pb-10 bg-white text-slate-800">

      <style dangerouslySetInnerHTML={{__html: `
        input[type=range] {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
        }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: #1A4D2E;
            cursor: pointer;
            margin-top: -10px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: #E2E8F0;
            border-radius: 2px;
        }
        input[type=range]:focus::-webkit-slider-runnable-track {
            background: #E2E8F0;
        }
      `}} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="material-symbols-outlined text-orange-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            <span className="font-bold text-xs text-gray-600 uppercase">Interactive Tool</span>
          </div>
          <h1 className="text-4xl md:text-6xl text-slate-900 mb-6 font-bold tracking-tight">
            Calculate Your <span className="text-[#1A4D2E]">Solar Savings</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
            Discover how much you can save on your energy bills while reducing your carbon footprint. Enter a few details to get a personalized estimate of your solar potential.
          </p>
        </div>
        <div className="md:col-span-5 mt-10 md:mt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white rounded-xl shadow-inner border border-gray-200 transform rotate-3"></div>
          <div className="bg-cover bg-center w-full h-80 rounded-xl shadow-lg relative z-10 border border-gray-200 transform -rotate-1 transition-transform duration-500 hover:rotate-0" 
               style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRSqf42Kbz17ZeT0FPmDaaiu2avuvj0hW9NJwOli3Qw5S8opP4NtUtCCPYDmoJDSpgjLTDYaz5BoTflgGj75T5qhpcZZETrTBaCxjZEPC6aC1y_0hnb8digUvv-odJz2dvfYDmy2S3R6Y3IrNN6WXdzuezjmxubiKAoazOEFJ2PBPYwYb8r1uwFNDLpF1S5F0IMuwj_x0SIzqksRofGqScyx_-SCHMCnZA5Hoe03KN6MGfAtkmZmm-')" }}>
          </div>
        </div>
      </section>

      {/* Calculator Area */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Form Section */}
            <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white relative">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#1A4D2E]">tune</span>
                System Parameters
              </h2>
              
              <div className="space-y-8">
                {/* Monthly Units Slider */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Average Monthly Electricity (kWh)</label>
                    <div className="text-2xl text-[#1A4D2E] font-bold">{monthlyUnits.toLocaleString()} Units</div>
                  </div>
                  <input 
                    className="w-full" 
                    type="range" 
                    min="100" max="3000" step="50" 
                    value={monthlyUnits} 
                    onChange={(e) => setMonthlyUnits(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>100</span>
                    <span>3,000+</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* DISCO / Location */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Electricity Provider (DISCO)</label>
                    <div className="relative">
                      <select 
                        value={disco}
                        onChange={(e) => setDisco(e.target.value)}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-900 py-3 px-4 rounded focus:outline-none focus:border-[#1A4D2E] focus:ring-1 focus:ring-[#1A4D2E] transition-colors cursor-pointer"
                      >
                        <option value="lesco">LESCO (Lahore)</option>
                        <option value="iesco">IESCO (Islamabad)</option>
                        <option value="mepco">MEPCO (Multan)</option>
                        <option value="fesco">FESCO (Faisalabad)</option>
                        <option value="gepco">GEPCO (Gujranwala)</option>
                        <option value="pesco">PESCO (Peshawar)</option>
                        <option value="hesco">HESCO (Hyderabad)</option>
                        <option value="sepco">SEPCO (Sukkur)</option>
                        <option value="qesco">QESCO (Quetta)</option>
                        <option value="ke">K-Electric (Karachi)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <span className="material-symbols-outlined">electric_bolt</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Usage Pattern */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Usage Pattern</label>
                    <div className="relative">
                      <select 
                        value={usagePattern}
                        onChange={(e) => setUsagePattern(e.target.value)}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-900 py-3 px-4 rounded focus:outline-none focus:border-[#1A4D2E] focus:ring-1 focus:ring-[#1A4D2E] transition-colors cursor-pointer"
                      >
                        <option value="daytime">Mostly Daytime</option>
                        <option value="balanced">Balanced Day/Night</option>
                        <option value="nighttime">Mostly Nighttime</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <span className="material-symbols-outlined">schedule</span>
                      </div>
                    </div>
                  </div>

                  {/* Roof Orientation */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Roof Orientation</label>
                    <div className="relative">
                      <select 
                        value={roofOrientation}
                        onChange={(e) => setRoofOrientation(e.target.value)}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-900 py-3 px-4 rounded focus:outline-none focus:border-[#1A4D2E] focus:ring-1 focus:ring-[#1A4D2E] transition-colors cursor-pointer"
                      >
                        <option value="south">South (Optimal)</option>
                        <option value="se">South-East</option>
                        <option value="sw">South-West</option>
                        <option value="east">East</option>
                        <option value="west">West</option>
                        <option value="north">North (Not Ideal)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <span className="material-symbols-outlined">explore</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shading */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Shading</label>
                    <div className="relative">
                      <select 
                        value={shading}
                        onChange={(e) => setShading(e.target.value)}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-900 py-3 px-4 rounded focus:outline-none focus:border-[#1A4D2E] focus:ring-1 focus:ring-[#1A4D2E] transition-colors cursor-pointer"
                      >
                        <option value="none">None (Full Sun)</option>
                        <option value="low">Low (Minor Shadows)</option>
                        <option value="medium">Medium (Trees/Buildings)</option>
                        <option value="high">High (Significant Blockage)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <span className="material-symbols-outlined">wb_sunny</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Type Toggle */}
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-3">System Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="cursor-pointer">
                      <input 
                        type="radio" 
                        name="system-type" 
                        value="ongrid" 
                        checked={systemType === 'ongrid'}
                        onChange={() => setSystemType('ongrid')}
                        className="peer sr-only" 
                      />
                      <div className="border border-gray-200 rounded p-4 text-center peer-checked:border-[#1A4D2E] peer-checked:bg-gray-50 transition-all hover:border-[#1A4D2E]/50">
                        <div className="text-xl font-bold text-slate-900 mb-1">On-Grid</div>
                        <div className="text-sm text-gray-500">No Battery</div>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input 
                        type="radio" 
                        name="system-type" 
                        value="hybrid" 
                        checked={systemType === 'hybrid'}
                        onChange={() => setSystemType('hybrid')}
                        className="peer sr-only" 
                      />
                      <div className="border border-gray-200 rounded p-4 text-center peer-checked:border-[#1A4D2E] peer-checked:bg-gray-50 transition-all hover:border-[#1A4D2E]/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#1A4D2E] text-white text-[10px] font-bold px-2 py-0.5 rounded-bl">BATTERY</div>
                        <div className="text-xl font-bold text-slate-900 mb-1">Hybrid</div>
                        <div className="text-sm text-gray-500">Storage Backup</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results Section */}
            <div className="lg:col-span-5 bg-gray-50 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                  Estimated Impact
                </h3>
                <div className="space-y-6">
                  
                  {/* Data Card 1 */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Recommended System Size</div>
                    <div className="text-4xl font-bold text-slate-900">{systemKw.toFixed(1)} <span className="text-2xl text-gray-500">kW</span></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Data Card 2 */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center">
                      <span className="material-symbols-outlined text-orange-500 mb-2 text-3xl">payments</span>
                      <div className="text-xl font-bold text-slate-900">Rs {systemCost.toLocaleString()}</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Est. System Cost</div>
                    </div>

                    {/* Data Card 3 */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center">
                      <span className="material-symbols-outlined text-[#1A4D2E] mb-2 text-3xl">calendar_clock</span>
                      <div className="text-xl font-bold text-slate-900">{payback > 20 ? "20+" : payback.toFixed(1)} <span className="text-sm">yrs</span></div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Payback Period</div>
                    </div>
                    
                    {/* Data Card 4 */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center col-span-2">
                      <span className="material-symbols-outlined text-[#366847] mb-2 text-3xl">savings</span>
                      <div className="text-xl font-bold text-slate-900">Rs {(savings / 100000).toFixed(1)} Lakhs</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Est. 20-Year Savings</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded text-sm font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex justify-center items-center gap-2">
                  Request a Detailed Quote
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Estimates are illustrative. Actual savings depend on specific site conditions and utility rates.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer FAQ */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-3xl font-bold text-[#1A4D2E] mb-8 text-center md:text-left">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
              <span className="text-lg font-bold text-slate-900">How accurate is this solar calculator?</span>
              <span className="material-symbols-outlined text-orange-500 transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              Our calculator uses regional utility rates, average sunlight hours for your location, and standard equipment efficiency ratings to provide a high-level estimate. While highly reliable for planning, a site visit is required for a 100% accurate quote.
            </div>
          </details>
          
          <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
              <span className="text-lg font-bold text-slate-900">Where does the data for these estimates come from?</span>
              <span className="material-symbols-outlined text-orange-500 transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              We pull data from NEPRA and local electric supply companies (e.g., LESCO, K-Electric, IESCO) to ensure our savings projections reflect current unit rates and market conditions in Pakistan.
            </div>
          </details>
          
          <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
              <span className="text-lg font-bold text-slate-900">What is the difference between Standard and Premium tiers?</span>
              <span className="material-symbols-outlined text-orange-500 transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              Standard panels offer excellent value and a faster payback period. Premium panels (PRO) utilize high-efficiency monocrystalline technology, producing more power in less space and offering superior long-term durability.
            </div>
          </details>
          
          <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
              <span className="text-lg font-bold text-slate-900">How do I get a formal quote for my home?</span>
              <span className="material-symbols-outlined text-orange-500 transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              Simply click the "Request a Detailed Quote" button above. One of our solar engineers will review your parameters and contact you to schedule a brief virtual or in-person consultation.
            </div>
          </details>
          
          <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
              <span className="text-lg font-bold text-slate-900">Does the estimate include Net Metering?</span>
              <span className="material-symbols-outlined text-orange-500 transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              Yes, our 20-year savings estimate factors in standard Net Metering policies in Pakistan, assuming you can export excess daytime solar production back to the grid for credits.
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
