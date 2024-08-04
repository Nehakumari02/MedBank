// "use client";

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Logo from '/public/Images/Home/logo.png'
// import { usePathname } from 'next/navigation'
// import { useState } from 'react';




// export default function DashboardPage() {
//   return (
//     <div className="dashboard-page bg-gray-100 min-h-screen p-4">
//       <header className="flex items-center justify-between bg-white p-4 shadow-md">
//         <div className="flex items-center">
//           <img src={Logo} alt="MedBank Logo" className="w-10 h-10" />
//           <h1 className="ml-2 text-xl font-bold">MedBank</h1>
//         </div>
//         <div className="flex items-center">
//           <button className="bg-blue-500 text-white py-2 px-4 rounded">New Order</button>
//           <div className="ml-4">
//             <span>JN | EN</span>
//           </div>
//         </div>
//       </header>
//       <main className="mt-8">
//         <section className="bg-white p-4 rounded shadow-md">
//           <h2 className="text-xl font-bold">Welcome User!</h2>
//           <div className="grid grid-cols-3 gap-4 mt-4">
//             <div className="bg-blue-100 p-4 rounded text-center">
//               <p className="text-lg font-semibold">Pending Orders</p>
//               <p className="text-3xl font-bold">0</p>
//             </div>
//             <div className="bg-green-100 p-4 rounded text-center">
//               <p className="text-lg font-semibold">Orders In-Progress</p>
//               <p className="text-3xl font-bold">0</p>
//             </div>
//             <div className="bg-yellow-100 p-4 rounded text-center">
//               <p className="text-lg font-semibold">Completed</p>
//               <p className="text-3xl font-bold">0</p>
//             </div>
//           </div>
//         </section>
//         <section className="bg-white p-4 rounded shadow-md mt-8">
//           <h2 className="text-xl font-bold">Order List</h2>
//           <div className="mt-4 overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr>
//                   <th className="border-b border-gray-200 p-2">Order ID</th>
//                   <th className="border-b border-gray-200 p-2">Order Title</th>
//                   <th className="border-b border-gray-200 p-2">Request Sheet</th>
//                   <th className="border-b border-gray-200 p-2">Cost Estimate</th>
//                   <th className="border-b border-gray-200 p-2">Formal Request</th>
//                   <th className="border-b border-gray-200 p-2">Sample Shipping</th>
//                   <th className="border-b border-gray-200 p-2">Quality Check</th>
//                   <th className="border-b border-gray-200 p-2">Library Prep</th>
//                   <th className="border-b border-gray-200 p-2">Analysis Progress</th>
//                   <th className="border-b border-gray-200 p-2">Analysis Done</th>
//                   <th className="border-b border-gray-200 p-2">Raw Data</th>
//                   <th className="border-b border-gray-200 p-2">Analysis Specification</th>
//                   <th className="border-b border-gray-200 p-2">Invoice</th>
//                   <th className="border-b border-gray-200 p-2">Payment & Receipt</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Example Row */}
//                 <tr>
//                   <td className="border-b border-gray-200 p-2">1</td>
//                   <td className="border-b border-gray-200 p-2">Order Example</td>
//                   <td className="border-b border-gray-200 p-2">Yes</td>
//                   <td className="border-b border-gray-200 p-2">$1000</td>
//                   <td className="border-b border-gray-200 p-2">Submitted</td>
//                   <td className="border-b border-gray-200 p-2">Shipped</td>
//                   <td className="border-b border-gray-200 p-2">Checked</td>
//                   <td className="border-b border-gray-200 p-2">Prepared</td>
//                   <td className="border-b border-gray-200 p-2">In Progress</td>
//                   <td className="border-b border-gray-200 p-2">Done</td>
//                   <td className="border-b border-gray-200 p-2">Available</td>
//                   <td className="border-b border-gray-200 p-2">Specified</td>
//                   <td className="border-b border-gray-200 p-2">Issued</td>
//                   <td className="border-b border-gray-200 p-2">Received</td>
//                 </tr>
//                 {/* More rows can be added here */}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/Images/Home/logo.png';
import { useState } from 'react';

export default function DashboardPage() {
  return (
    <div className="dashboard-page bg-gray-100 min-h-screen p-4">
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
        <div className="flex items-center">
          <Image src={Logo} alt="MedBank Logo" width={40} height={40} />
          <h1 className="ml-2 text-xl font-bold">Welcome User!</h1>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">New Order</button>
          <div className="ml-4">
            <span>JN | EN</span>
          </div>
        </div>
      </header>
      <main className="mt-8">
        <section className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">Order Overview</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-100 p-4 rounded text-center">
              <p className="text-lg font-semibold">Pending Orders</p>
              <p className="text-3xl font-bold">0</p>
            </div>
            <div className="bg-green-100 p-4 rounded text-center">
              <p className="text-lg font-semibold">Orders In-Progress</p>
              <p className="text-3xl font-bold">0</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded text-center">
              <p className="text-lg font-semibold">Completed</p>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>
        </section>
        <section className="bg-white p-4 rounded shadow-md mt-8">
          <h2 className="text-xl font-bold">Order List</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 p-2">Order ID</th>
                  <th className="border-b border-gray-200 p-2">Order Title</th>
                  <th className="border-b border-gray-200 p-2">Request Sheet</th>
                  <th className="border-b border-gray-200 p-2">Cost Estimate</th>
                  <th className="border-b border-gray-200 p-2">Formal Request</th>
                  <th className="border-b border-gray-200 p-2">Sample Shipping</th>
                  <th className="border-b border-gray-200 p-2">Quality Check</th>
                  <th className="border-b border-gray-200 p-2">Library Prep</th>
                  <th className="border-b border-gray-200 p-2">Analysis Progress</th>
                  <th className="border-b border-gray-200 p-2">Analysis Done</th>
                  <th className="border-b border-gray-200 p-2">Raw Data</th>
                  <th className="border-b border-gray-200 p-2">Analysis Specification</th>
                  <th className="border-b border-gray-200 p-2">Invoice</th>
                  <th className="border-b border-gray-200 p-2">Payment & Receipt</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr>
                  <td className="border-b border-gray-200 p-2">1</td>
                  <td className="border-b border-gray-200 p-2">Order Example</td>
                  <td className="border-b border-gray-200 p-2">Yes</td>
                  <td className="border-b border-gray-200 p-2">$1000</td>
                  <td className="border-b border-gray-200 p-2">Submitted</td>
                  <td className="border-b border-gray-200 p-2">Shipped</td>
                  <td className="border-b border-gray-200 p-2">Checked</td>
                  <td className="border-b border-gray-200 p-2">Prepared</td>
                  <td className="border-b border-gray-200 p-2">In Progress</td>
                  <td className="border-b border-gray-200 p-2">Done</td>
                  <td className="border-b border-gray-200 p-2">Available</td>
                  <td className="border-b border-gray-200 p-2">Specified</td>
                  <td className="border-b border-gray-200 p-2">Issued</td>
                  <td className="border-b border-gray-200 p-2">Received</td>
                </tr>
                {/* More rows can be added here */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}


