'use client'
import QuotationTable from '../../../../../../components/QuotationTable';
 // Adjust the import path as needed
 import { usePathname, useRouter } from "next/navigation";

 
const QuotationPage = () => {
  const path = usePathname();
  const orderId = usePathname().split("/")[3]; // Replace with dynamic orderId if needed

  return (
    <div>
      <h1>Quotation Table</h1>
      <QuotationTable orderId={orderId} />
    </div>
  );
};

export default QuotationPage;
