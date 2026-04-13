import React, { useState } from 'react';
import { Heart, Shield, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(25);
  const [customAmount, setCustomAmount] = useState<string>('');

  const amounts = [10, 25, 50, 100];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-red-50 text-red-500 rounded-2xl mb-6">
          <Heart className="w-8 h-8 fill-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
          Support Our Mission
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Your contribution directly funds community cleanups, environmental education, and tools for our volunteers. 100% of public donations go to impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Donation Form */}
        <div className="md:col-span-7 bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Select an amount</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={cn(
                  "py-4 rounded-2xl text-lg font-bold transition-all duration-200 border-2",
                  selectedAmount === amount
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-gray-100 bg-white text-gray-600 hover:border-gray-200 hover:bg-gray-50"
                )}
              >
                ${amount}
              </button>
            ))}
            <div className={cn(
              "col-span-2 sm:col-span-1 border-2 rounded-2xl flex items-center px-4 transition-all duration-200",
              selectedAmount === 'custom'
                ? "border-primary bg-primary/5"
                : "border-gray-100 bg-white hover:border-gray-200"
            )}>
              <span className="text-gray-500 font-bold mr-1">$</span>
              <input
                type="number"
                placeholder="Custom"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount('custom');
                }}
                className="w-full bg-transparent outline-none font-bold text-gray-900 placeholder:text-gray-400 py-4"
              />
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary checked:border-primary transition-colors cursor-pointer" />
                <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={4} />
              </div>
              <span className="text-gray-700 font-medium">Make this a monthly recurring donation</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary checked:border-primary transition-colors cursor-pointer" defaultChecked />
                <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={4} />
              </div>
              <span className="text-gray-700 font-medium">Cover processing fees so 100% goes to the cause</span>
            </label>
          </div>

          <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-md active:scale-[0.98] flex items-center justify-center text-lg">
            Donate {selectedAmount === 'custom' ? (customAmount ? `$${customAmount}` : '') : `$${selectedAmount}`}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          
          <div className="mt-6 flex items-center justify-center text-sm text-gray-500 font-medium">
            <Shield className="w-4 h-4 mr-1.5 text-green-500" />
            Secure, encrypted payment processing
          </div>
        </div>

        {/* Impact Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-[#FDFBF7] rounded-[2rem] p-6 sm:p-8 border border-[#F2EFEA]">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Where your money goes</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 mr-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Equipment & Tools</h4>
                  <p className="text-sm text-gray-600 mt-1">Gloves, bags, and specialized cleaning tools for our volunteers.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-50 p-2.5 rounded-xl text-green-600 mr-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Event Organization</h4>
                  <p className="text-sm text-gray-600 mt-1">Logistics, permits, and waste disposal for large-scale cleanups.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-50 p-2.5 rounded-xl text-orange-600 mr-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Education</h4>
                  <p className="text-sm text-gray-600 mt-1">Workshops and materials for local schools to promote sustainability.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white rounded-[2rem] p-6 sm:p-8 shadow-md relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <h3 className="font-heading text-xl font-bold mb-2 relative z-10">Our Promise</h3>
            <p className="text-primary-100 text-sm leading-relaxed relative z-10">
              We are committed to radical transparency. Every quarter, we publish a detailed financial report showing exactly how donations were utilized to make our environment cleaner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
