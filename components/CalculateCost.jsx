import React from 'react';

const CalculateCost = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg md:py-[26px] md:px-[12px] md:w-[1199px] mx-auto my-10 font-DM-Sans md:h-[576px]">
            <h2 className="md:text-[22px] font-medium text-center mb-6">Calculate Cost</h2>
            <table className="w-full mb-6">
                <thead>
                    <tr className="text-left font-medium text-sm">
                        <th className="py-2">Sample ID</th>
                        <th className="py-2">Sample Name</th>
                        <th className="py-2">Quality check fees</th>
                        <th className="py-2">Library adjustment fees</th>
                        <th className="py-2">Next gen. sequencer analysis fees</th>
                        <th className="py-2">Tax</th>
                        <th className="py-2">Others</th>
                        <th className="py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3].map((_, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-2">
                                <input
                                    type="text"
                                    className="border rounded-lg w-full p-2"
                                    placeholder={`10${index + 1}`}
                                />
                            </td>
                            <td className="py-2">
                                <input
                                    type="text"
                                    className="border rounded-lg w-full p-2"
                                    placeholder={`${index === 0 ? 'Red' : index === 1 ? 'White' : 'Yellow'} mouse`}
                                />
                            </td>
                            <td className="py-2">
                                <input
                                    type="text"
                                    className="border rounded-lg w-full p-2"
                                    placeholder="JPY"
                                />
                            </td>
                            <td className="py-2">
                                <input
                                    type="text"
                                    className="border rounded-lg w-full p-2"
                                    placeholder="JPY"
                                />
                            </td>
                            <td className="py-2">
                                <input
                                    type="text"
                                    className="border rounded-lg w-full p-2"
                                    placeholder="JPY"
                                />
                            </td>
                            <td className="py-2">
                                <input
                                    type="text"
                                    className="border rounded-lg w-full p-2"
                                    placeholder="JPY"
                                />
                            </td>
                            <td className="py-2">
                                <input
                                    type="text"
                                    className="border rounded-lg w-full p-2"
                                    placeholder="JPY"
                                />
                            </td>
                            <td className="py-2">
                                <input
                                    type="text"
                                    className="border rounded-lg w-full p-2"
                                    placeholder="JPY"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center mb-6">
                <input type="checkbox" id="tax" className="mr-2" />
                <label htmlFor="tax">Click to enter tax percent.</label>
            </div>
            <div className="flex items-center mb-6">
                <input type="checkbox" id="amount" className="mr-2" />
                <label htmlFor="amount">Click to enter other amount.</label>
            </div>
            <p className="text-gray-500 text-sm mb-6">
                Note: The tax amount is subjected to the country and region. Other charges may include shipping or handling fees.
            </p>
            <div className='flex items-center justify-center gap-[12px]'>
                <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Cancel</button>
                <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Confirm</button>
            </div>
        </div>
    );
};

export default CalculateCost;
