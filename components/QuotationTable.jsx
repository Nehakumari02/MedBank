'use client'
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from "next/navigation";

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

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const response = await fetch('/api/fetchQuotation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId:orderIdDB }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Samples data:', data); // Debugging line
        if (data.error) {
          throw new Error(data.error);
        }

        setSamples(data.data); // Assuming 'data.data' contains the sample data
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
        console.log('User details data:', data); // Debugging line
        if (data.error) {
          throw new Error(data.error);
        }

        setUserDetails(data.user); // Assuming 'data.user' contains the user details
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Ensure loading is set to false in all cases
      }
    };

    fetchSamples();
    fetchUserDetails1();
  }, [orderId, userId]);

  //if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {userDetails ? (
        <div>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>City:</strong> {userDetails.city}</p>
          <p><strong>Postal Code:</strong> {userDetails.postalCode}</p>
          <p><strong>Order ID:</strong> {orderId}</p>
        </div>
      ) : (
        <p>No user details available.</p>
      )}
      <div className="pb-9 pt-2">{formattedDate}</div>

      <div className='pb-5 font-medium text-2xl' > Quotation</div>
      <table border="1" cellspacing="0" cellpadding="5">
        <thead>
          <tr>
            <th>Sample ID</th>
            <th>Name</th>
            <th>Quality check Fees</th>
            <th>Library adjustment Fees</th>
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
              <td>{sample.analysisFees || 'N/A'}</td>
              <td>{sample.tax || 'N/A'}</td>
              <td>{sample.others || 'N/A'}</td>
              <td>{sample.total || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotationTable;
