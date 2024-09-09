'use client'
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { useOrder } from '@/contexts/OrderContext';

const QuotationTable = ({ orderIdDB, orderId, userId }) => {
  const path = usePathname();
  const [samples, setSamples] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${day}-${month}-${year}`;
  const { grandTotal, setGrandTotal } = useOrder();

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const response = await fetch('/api/fetchQuotation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId: orderIdDB }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setSamples(data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchUserDetails1 = async () => {
      try {
        const response = await fetch('/api/fetchUserDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok1');
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setUserDetails(data.user);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSamples();
    fetchUserDetails1();
  }, [orderId, userId]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {userDetails ? (
        <div className="mb-8">
          <p className="text-xl font-bold">Quotation Receipt</p>
          <div className="text-sm">
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>City:</strong> {userDetails.city}</p>
            <p><strong>Postal Code:</strong> {userDetails.postalCode}</p>
            <p><strong>Order ID:</strong> {orderId}</p>
            <p><strong>Date:</strong> {formattedDate}</p>
            <p><strong>{grandTotal}</strong></p>
          </div>
        </div>
      ) : (
        <p>No user details available.</p>
      )}
      
      <h2 className="pb-5 font-medium text-2xl text-center">Quotation</h2>
      
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Sample ID</th>
            <th className="border px-4 py-2 text-left">Sample Name</th>
            <th className="border px-4 py-2 text-left">Quality Check Fees</th>
            <th className="border px-4 py-2 text-left">Library Adjustment Fees</th>
            <th className="border px-4 py-2 text-left">Analysis Fees</th>
            <th className="border px-4 py-2 text-left">Tax</th>
            <th className="border px-4 py-2 text-left">Others</th>
            <th className="border px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {samples.map((sample, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{sample.id}</td>
              <td className="border px-4 py-2">{sample.name}</td>
              <td className="border px-4 py-2">{sample.qualityFees || 'N/A'}</td>
              <td className="border px-4 py-2">{sample.libraryFees || 'N/A'}</td>
              <td className="border px-4 py-2">{sample.analysisFees || 'N/A'}</td>
              <td className="border px-4 py-2">{sample.tax || 'N/A'}</td>
              <td className="border px-4 py-2">{sample.others || 'N/A'}</td>
              <td className="border px-4 py-2">{sample.total || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotationTable;
