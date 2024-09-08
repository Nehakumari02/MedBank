'use client'
import { useState, useEffect } from 'react';

import { usePathname, useRouter } from "next/navigation";


const QuotationTable = ({ orderId }) => {
  const path = usePathname();
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const response = await fetch('/api/fetchQuotation', { // Adjust the API endpoint as needed
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId }),
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
      } finally {
        setLoading(false);
      }
    };

    fetchSamples();
  }, [orderId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Sample ID</th>
          <th>Name</th>
          <th>Quality Fees</th>
          <th>Library Fees</th>
          <th>Analysis Fees</th>
          <th>Tax</th>
          <th>Others</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {samples.map(sample => (
          <tr key={sample.id}>
            <td>{sample.id}</td>
            <td>{sample.name}</td>
            <td>{sample.qualityFees || 'N/A'}</td>
            <td>{sample.libraryFees || 'N/A'}</td>
            <td>{sample.AnalysisFees || 'N/A'}</td>
            <td>{sample.tax || 'N/A'}</td>
            <td>{sample.others || 'N/A'}</td>
            <td>{sample.total || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuotationTable;
