import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Assuming you're using axios to fetch data from your database

const QuotationTable = () => {
  const [quotationData, setQuotationData] = useState({
    recipientInfo: { name: '', address: '' },
    date: '',
    quotationNumber: '',
    contents: '',
    totalPrice: ''
  });

  // Fetch data from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get-quotation'); // Replace with your API route
        setQuotationData(response.data);
      } catch (error) {
        console.error('Error fetching quotation data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Items to be included in the quotation</th>
            <th className="border border-gray-300 px-4 py-2">ENGLISH</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1. Recipient Information</td>
            <td className="border border-gray-300 px-4 py-2">
              {quotationData.recipientInfo.name} <br />
              {quotationData.recipientInfo.address}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2. Date</td>
            <td className="border border-gray-300 px-4 py-2">{quotationData.date}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3. Quotation Number</td>
            <td className="border border-gray-300 px-4 py-2">{quotationData.quotationNumber}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">4. Title of document</td>
            <td className="border border-gray-300 px-4 py-2">Quotation</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5. Contents</td>
            <td className="border border-gray-300 px-4 py-2">
              {quotationData.contents}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">6. Total Price</td>
            <td className="border border-gray-300 px-4 py-2">{quotationData.totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuotationTable;
