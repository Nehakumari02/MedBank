'use client'
import { useRef } from 'react';
import QuotationTable from '../../../../../../components/QuotationTable';
import { usePathname } from "next/navigation";
import html2pdf from 'html2pdf.js';

const QuotationPage = () => {
  const path = usePathname();
  const orderId = path.split("/")[3]; // Adjust based on your URL structure
  const printRef = useRef();

  const generatePDF = () => {
    const element = printRef.current;

    const options = {
      margin: 0.5,
      filename: 'quotation.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div>
      <h1>Quotation Table</h1>
      <button onClick={generatePDF}>Download PDF</button>
      <div ref={printRef}>
        <QuotationTable orderId={orderId} />
      </div>
    </div>
  );
};

export default QuotationPage;
