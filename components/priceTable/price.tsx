import { features } from 'process';
import React from 'react';

const data = [
    {
        value: '1 Credit',
        price: 12,
        features: [
            '16 Headshot Images',
            '1  Model(s) Included'
        ]
    },
    {
        value: '3 Credits',
        price: 30,
        features: [
            '48 Headshot Images',
            '3  Model(s) Included'
        ]
    },
    {
        value: '5 Credits',
        price: 40,
        features: [
            '80 Headshot Images',
            '5  Model(s) Included'
        ]
    },
]


const PriceTable = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
            {data.map(el => {
                return (
                    <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-gray-900">
                            {el.value}
                            <span className="sr-only">Plan</span>
                        </h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">${el.price}</strong>
                            <span className="text-sm font-medium text-gray-700"> /month</span>
                        </p>
                    </div>
                    <ul className="mt-6 space-y-2">
                        {el.features.map(feature => {
                            return (
                                <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                                <span className="text-gray-700">{feature}</span>
                            </li>
                            )
                        })}
                    </ul>
                    <a className="mt-8 block rounded-full border transition-all cursor-pointer px-12 py-3 text-center text-sm font-medium border-none bg-[#6861ff] text-white hover:bg-[#5b54e0] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5750d6]">
                        <span className="flex items-center justify-center gap-2">Pay With Yookassa</span>
                    </a>
                </div>
                )
            })}

        </div>
    );
}

export default PriceTable;


